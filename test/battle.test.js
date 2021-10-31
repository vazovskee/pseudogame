
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
const DEFAULT_UNIT_NAME = "John";
const BEFORE_DESTRUCTION_TRANSACTIONS_FEE = 50000000; // взял число 50_000_000 за максимум, т.к. не уверен, как точно рассчитать стоимость транзацкий, которые приводят к уничтожению контракта юнита
let client;

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
            newFortress: await fortress.getAddress(),
            newName: DEFAULT_UNIT_NAME
        },
        useGiver: true,
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

describe("Battle", () => {
    describe("Fortress", () => {
        it("can be empty", async () => {
            const keys = await createKeys();
            const fortress = createFortress(keys)
            await deployFortress(fortress);

            const unitsResponse = await fortress.runLocal("units", {});
            const unitsCount = Object.keys(unitsResponse.decoded.output.units).length;
            assert.equal(unitsCount, 0);
        });
        it("can have units", async () => {
            const keys = await createKeys();
            const fortress = createFortress(keys)
            await deployFortress(fortress);

            const archer =  createUnit(Archer, keys);
            await deployUnit(archer, fortress);

            const warrior =  createUnit(Warrior, keys);
            await deployUnit(warrior, fortress);

            const unitsResponse = await fortress.runLocal("units", {});
            const unitsCount = Object.keys(unitsResponse.decoded.output.units).length;
            assert.equal(unitsCount, 2);
        });
    });
    describe("Unit", () => {
        let keysRed;
        let keysBlue;
        let fortressRed;
        let fortressBlue;
        let archerRed
        let warriorBlue

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

        it("can damage another unit", async () => {
            warriorAddress = await warriorBlue.getAddress();

            const archerAttackResponse = await archerRed.runLocal("attackPower", {});
            const archerAttackPower = parseInt(archerAttackResponse.decoded.output.attackPower);
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
            fortressAddress = await fortressBlue.getAddress();

            const archerAttackResponse = await archerRed.runLocal("attackPower", {});
            const archerAttackPower = parseInt(archerAttackResponse.decoded.output.attackPower);
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
        let keysRed;
        let keysBlue;
        let fortressRed;
        let fortressBlue;
        let archerRed
        let warriorBlue

        let defenderCrystals;
        let attackerCrystals;
        let attakerFinalCrystals;
        let fortressCrystals;
        let totalDefendersCrystals = 0;
        let totalAttackerFee = 0;

        beforeEach(async () => {
            
            
            keysRed = await createKeys();
            keysBlue = await createKeys();
            
            // если параметр { useGiver: true }, то по умолчанию новому контракту выдаётся 10_000_000_000 кристалов
            fortressRed = createFortress(keysRed)
            await deployFortress(fortressRed);
            fortressBlue = createFortress(keysBlue)
            await deployFortress(fortressBlue);

            warriorRed = createUnit(Warrior, keysRed);
            await deployUnit(warriorRed, fortressRed);
            archerRed = createUnit(Archer, keysRed);
            await deployUnit(archerRed, fortressRed);
            warriorBlue = createUnit(Warrior, keysBlue);
            await deployUnit(warriorBlue, fortressBlue);
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
        });
        // it("# fortress is destroyed and defeated units transfer all their crystals to the killer", async () => {
        //     let totalDefendersCrystals = 0;
        //     let totalAttackerFee = 0;
        //     let currentDefenderCrystals;
        //     let fortressCrystals;
        //     let attackerStartCrystals;
        //     let attackerCurrentStartCrystals;
        //     let attackerCurrentEndCrystals;
        //     let attakerFinalCrystals;

        //     const unitsRedResponse = await fortressRed.runLocal("units", {});
        //     const unitsAddressesRed = Object.keys(unitsRedResponse.decoded.output.units);

        //     for (const defenderAddress of unitsAddressesRed) {
        //         defender = fortressRedUnits[defenderAddress];
        //         currentDefenderCrystals = parseInt(await defender.getBalance(), 16);
        //         totalDefendersCrystals += currentDefenderCrystals;
        //     };

        //     while (!!(await fortressRed.boc())) {
        //         attackerCrystals = await warriorBlue.getBalance();
        //         fortressCrystals = await fortressRed.getBalance();
                
        //         await warriorBlue.run("attack", {gameObject: fortressRedAddress});
        //         fortressRed.refresh();
        //     };

        //     fortressCrystals = parseInt(fortressCrystals, 16);
        //     attackerCrystals = parseInt(attackerCrystals, 16);
        //     attakerFinalCrystals = parseInt(await warriorBlue.getBalance(), 16);
            
        //     console.log('check',attakerFinalCrystals - (attackerCrystals + defenderCrystals + totalDefendersCrystals - BEFORE_DESTRUCTION_TRANSACTIONS_FEE));
        //     //assert.ok(attakerFinalCrystals > attackerCrystals + defenderCrystals - BEFORE_DESTRUCTION_TRANSACTIONS_FEE);
        // });
        it("# all units are slayed and all crystals are transferred to their killer (fortress self-destroyed)", async () => {
            
            let attackerStartCrystals;
            let attackerCurrentStartCrystals;
            let attackerCurrentEndCrystals;

            const unitsRedResponse = await fortressRed.runLocal("units", {});
            const unitsAddressesRed = Object.keys(unitsRedResponse.decoded.output.units);
            const unitsAmount = unitsAddressesRed.length;

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

            assert.ok(attakerFinalCrystals > attackerStartCrystals + totalDefendersCrystals + fortressCrystals - totalAttackerFee - unitsAmount * BEFORE_DESTRUCTION_TRANSACTIONS_FEE);
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
    });
});
