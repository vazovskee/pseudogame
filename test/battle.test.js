
const assert = require('assert');
const { Account } = require("@tonclient/appkit");
const { TonClient, signerKeys } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");

const { Fortress } = require("../FortressContract.js")
const { Warrior } = require("../WarriorContract.js")

TonClient.useBinaryLibrary(libNode); 

/**
 * @param client {TonClient}
 * @returns {Promise<void>}
 */
const RED_WARRIOR_NAME = "Samuel";
let client;
let keysRed;
let fortressRed;
let addressFortressRed;
let warriorRed;

async function deployRedFortress() {
    keysRed = await TonClient.default.crypto.generate_random_sign_keys();

    fortressRed = new Account(Fortress, {
        signer: signerKeys(keysRed),
        client
    });
    addressFortressRed = await fortressRed.getAddress();

    await fortressRed.deploy({ useGiver: true });
}

async function deployRedWarrior() {
    warriorRed = new Account(Warrior, {
        signer: signerKeys(keysRed),
        client
    });

    await warriorRed.deploy({
        initInput: {
            newFortress: addressFortressRed,
            newName: RED_WARRIOR_NAME
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

describe('Fortress', () => {
    it('is empty', async () => {
        await deployRedFortress();
        const unitsResponse = await fortressRed.runLocal("units", {});
        const units = unitsResponse.decoded.output.units;
        assert.equal(Object.keys(units).length, 0);
    });
    it('has units', async () => {
        await deployRedFortress();
        await deployRedWarrior();
        const unitsResponse = await fortressRed.runLocal("units", {});
        const units = unitsResponse.decoded.output.units;
        assert.equal(Object.keys(units).length, 1);
    });

});
