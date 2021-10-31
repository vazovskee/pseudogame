
const assert = require('assert');
const { Account } = require("@tonclient/appkit");
const { TonClient, signerKeys } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");

const { Fortress } = require("../FortressContract.js")
const { Warrior } = require("../WarriorContract.js")
const { Archer } = require("../ArcherContract.js")

TonClient.useBinaryLibrary(libNode); 

/**
 * @param client {TonClient}
 * @returns {Promise<void>}
 */
const BEFORE_DESTRUCTION_TRANSACTIONS_FEE = 50000000; // взял число 50_000_000 за максимум, т.к. не уверен, как точно рассчитать стоимость транзацкий, которые приводят к уничтожению контракта юнита

async function createKeys() {
    const keys = await TonClient.default.crypto.generate_random_sign_keys();
    return keys;
}

function createFortress(keys) {
    const fortress = new Account(Fortress, {
        signer: signerKeys(keys),
        client
    });
    return fortress;
}

async function deployFortress(fortress) {
    await fortress.deploy({ useGiver: true });
}

function createUnit(unitClass, keys) {
    const unit = new Account(unitClass, {
        signer: signerKeys(keys),
        client
    });
    return unit;
}

async function deployUnit(unit, fortress) {
    await unit.deploy({
        initInput: {
            newFortress: await fortress.getAddress()
        },
        useGiver: true, // по умолчанию новому контракту выдаётся 10_000_000_000 кристалов
    });
}

beforeEach(() => {
    client = new TonClient({
        network: {
            endpoints: ["http://localhost"]
        }
    });
});

afterEach(() => {
    client.close();
});

describe("GameObjects test:", () => {
    describe("Fortress", () => {

        let fortress;
        beforeEach(async () => {
            keys = await createKeys();
            fortress = createFortress(keys)
            await deployFortress(fortress);
        });
        it("can be empty", async () => {
            const unitsResponse = await fortress.runLocal("units", {});
            const unitsCount = Object.keys(unitsResponse.decoded.output.units).length;
            assert.equal(unitsCount, 0);
        });
        it("can have units", async () => {
            const archer =  createUnit(Archer, keys);
            await deployUnit(archer, fortress);

            const warrior =  createUnit(Warrior, keys);
            await deployUnit(warrior, fortress);

            const unitsResponse = await fortress.runLocal("units", {});
            const unitsCount = Object.keys(unitsResponse.decoded.output.units).length;
            assert.equal(unitsCount, 2);
        });
    });
    describe("", () => {
        beforeEach(async () => {
            keysRed = await createKeys();
            keysBlue = await createKeys();

            fortressRed = createFortress(keysRed)
            await deployFortress(fortressRed);
            fortressBlue = createFortress(keysBlue)
            await deployFortress(fortressBlue);

            archerRed = createUnit(Archer, keysRed);
            await deployUnit(archerRed, fortressRed);
            warriorBlue = createUnit(Warrior, keysBlue);
            await deployUnit(warriorBlue, fortressBlue);
        });

        describe("Unit", () => {
            beforeEach(async () => {
                archerAttackResponse = await archerRed.runLocal("attackPower", {});
                archerAttackPower = parseInt(archerAttackResponse.decoded.output.attackPower);
            });
            it("can damage another unit", async () => {
                const warriorAddress = await warriorBlue.getAddress();
                const warriorHealthResponse = await warriorBlue.runLocal("healthPoints", {});
                const initWarriorHealthPoints = parseInt(warriorHealthResponse.decoded.output.healthPoints);
                const warriorArmorResponse = await warriorBlue.runLocal("armorPoints", {});
                const initWarriorArmorPoints = parseInt(warriorArmorResponse.decoded.output.armorPoints);
                
                await archerRed.run("attack", {gameObject: warriorAddress});
                warriorBlue.refresh();
                const damagedWarriorHealthResponse = await warriorBlue.runLocal("healthPoints", {});
                const damagedWarriorHealthPoints = parseInt(damagedWarriorHealthResponse.decoded.output.healthPoints);

                assert.equal(damagedWarriorHealthPoints, initWarriorArmorPoints + initWarriorHealthPoints - archerAttackPower);
            });

            it("can damage fortress", async () => {
                const fortressAddress = await fortressBlue.getAddress();
                const fortressHealthResponse = await fortressBlue.runLocal("healthPoints", {});
                const initFortressHealthPoints = parseInt(fortressHealthResponse.decoded.output.healthPoints);
                const fortressArmorResponse = await fortressBlue.runLocal("armorPoints", {});
                const initFortressArmorPoints = parseInt(fortressArmorResponse.decoded.output.armorPoints);
                
                await archerRed.run("attack", {gameObject: fortressAddress});
                fortressBlue.refresh();
                const damagedFortressHealthResponse = await fortressBlue.runLocal("healthPoints", {});
                const damagedFortressHealthPoints = parseInt(damagedFortressHealthResponse.decoded.output.healthPoints);

                assert.equal(damagedFortressHealthPoints, initFortressHealthPoints + initFortressArmorPoints - archerAttackPower);
            });
        });

        describe("Crystals", () => {
            let fortressCrystals;
            let defenderCrystals;
            let attackerCrystals;
            let attakerFinalCrystals;

            beforeEach(async () => {
                totalDefendersCrystals = 0;
                totalAttackerFee = 0;

                warriorRed = createUnit(Warrior, keysRed);
                await deployUnit(warriorRed, fortressRed);
                archerBlue = createUnit(Archer, keysBlue);
                await deployUnit(archerBlue, fortressBlue);
                
                fortressRedAddress = await fortressRed.getAddress();
                fortressBlueAddress = await fortressBlue.getAddress();
                warriorRedAddress = await warriorRed.getAddress();
                archerRedAddress = await archerRed.getAddress();
                warriorBlueAddress = await warriorBlue.getAddress();
                archerBlueAddress = await archerBlue.getAddress();

                fortressRedUnits = {};
                fortressRedUnits[warriorRedAddress] = warriorRed;
                fortressRedUnits[archerRedAddress] = archerRed;

                unitsRedResponse = await fortressRed.runLocal("units", {});
                unitsAddressesRed = Object.keys(unitsRedResponse.decoded.output.units);
                unitsRedAmount = unitsAddressesRed.length;
            });
            it("# one unit is slayed and all his crystals are transferred to his killer (fortress isn't destroyed)", async () => {

                while (!!(await archerRed.boc())) {
                    attackerCrystals = await warriorBlue.getBalance();
                    defenderCrystals = await archerRed.getBalance();
                    
                    await warriorBlue.run("attack", {gameObject: archerRedAddress});
                    archerRed.refresh();
                };

                defenderCrystals = parseInt(defenderCrystals, 16);
                attackerCrystals = parseInt(attackerCrystals, 16);
                attakerFinalCrystals = parseInt(await warriorBlue.getBalance(), 16);

                assert.ok(attakerFinalCrystals > attackerCrystals + defenderCrystals - BEFORE_DESTRUCTION_TRANSACTIONS_FEE);
            });
            it("# fortress is destroyed and all defeated units transfer their crystals to the killer", async () => {
                
                for (const defenderAddress of unitsAddressesRed) {
                    defender = fortressRedUnits[defenderAddress];
                    defenderCrystals = parseInt(await defender.getBalance(), 16);
                    totalDefendersCrystals += defenderCrystals;
                };

                while (!!(await fortressRed.boc())) {
                    attackerCrystals = await archerBlue.getBalance();
                    fortressCrystals = await fortressRed.getBalance();
    
                    await archerBlue.run("attack", {gameObject: fortressRedAddress});
                    await fortressRed.refresh();
                };

                fortressCrystals = parseInt(fortressCrystals, 16);
                attackerCrystals = parseInt(attackerCrystals, 16);
                attakerFinalCrystals = parseInt(await archerBlue.getBalance(), 16);

                assert.ok(attakerFinalCrystals > attackerCrystals + fortressCrystals + totalDefendersCrystals - unitsRedAmount * BEFORE_DESTRUCTION_TRANSACTIONS_FEE);
            });
            it("# all units are slayed and all crystals are transferred to their killer (fortress self-destroyed)", async () => {
                
                let attackerStartCrystals;
                let attackerCurrentStartCrystals;
                let attackerCurrentEndCrystals;

                attackerStartCrystals = parseInt(await warriorBlue.getBalance(), 16);

                for (const defenderAddress of unitsAddressesRed) {
                    defender = fortressRedUnits[defenderAddress];
                    attackerCurrentStartCrystals = parseInt(await warriorBlue.getBalance(), 16);
                    fortressCrystals = await fortressRed.getBalance();

                    while (!!(await defender.boc())) {
                        defenderCrystals = await defender.getBalance();
                        attackerCurrentEndCrystals = parseInt(await warriorBlue.getBalance(), 16);

                        await warriorBlue.run("attack", {gameObject: defenderAddress});
                        defender.refresh();
                    };

                    totalDefendersCrystals += parseInt(defenderCrystals, 16);
                    totalAttackerFee += attackerCurrentStartCrystals - attackerCurrentEndCrystals;
                    fortressRed.refresh();
                };
        
                fortressCrystals = parseInt(fortressCrystals, 16);
                attakerFinalCrystals = parseInt(await warriorBlue.getBalance(), 16);

                assert.ok(attakerFinalCrystals > attackerStartCrystals + totalDefendersCrystals + fortressCrystals - totalAttackerFee - unitsRedAmount * BEFORE_DESTRUCTION_TRANSACTIONS_FEE);
            });
        });
    });
});
