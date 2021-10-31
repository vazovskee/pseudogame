
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

    // describe("Crystals", () => {
    //     let keysRed;
    //     let keysBlue;
    //     let fortressRed;
    //     let fortressBlue;
    //     let archerRed
    //     let warriorBlue

    //     beforeEach(async () => {
    //         keysRed = await createKeys();
    //         keysBlue = await createKeys();

    //         fortressRed = createFortress(keysRed)
    //         await deployFortress(fortressRed);
    //         fortressBlue = createFortress(keysBlue)
    //         await deployFortress(fortressBlue);

    //         archerRed = createUnit(Archer, keysRed);
    //         await deployUnit(archerRed, fortressRed);
    //         warriorBlue = createUnit(Warrior, keysBlue);
    //         await deployUnit(warriorBlue, fortressBlue);
    //     });

    //     it("are available for game objects", async () => {
    //         warriorAddress = await warriorBlue.getAddress();

    //         const archerCrystals = await archerRed.getBalance();
    //         const fortressCrystals = await fortressBlue.getBalance();
    //         console.log(archerCrystals);
    //         console.log(fortressCrystals);
    //     });
    // });
});
