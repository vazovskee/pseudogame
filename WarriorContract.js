const Warrior = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "newName",
                        "type": "string"
                    },
                    {
                        "name": "newFortress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "attack",
                "inputs": [
                    {
                        "name": "gameObject",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "perish",
                "inputs": [
                    {
                        "name": "killerAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "takeDamage",
                "inputs": [
                    {
                        "name": "damagePoints",
                        "type": "int16"
                    }
                ],
                "outputs": []
            },
            {
                "name": "healthPoints",
                "inputs": [],
                "outputs": [
                    {
                        "name": "healthPoints",
                        "type": "int16"
                    }
                ]
            },
            {
                "name": "armorPoints",
                "inputs": [],
                "outputs": [
                    {
                        "name": "armorPoints",
                        "type": "int16"
                    }
                ]
            },
            {
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "attackPower",
                "inputs": [],
                "outputs": [
                    {
                        "name": "attackPower",
                        "type": "int16"
                    }
                ]
            },
            {
                "name": "primaryFortress",
                "inputs": [],
                "outputs": [
                    {
                        "name": "primaryFortress",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "healthPoints",
                "type": "int16"
            },
            {
                "name": "armorPoints",
                "type": "int16"
            },
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "attackPower",
                "type": "int16"
            },
            {
                "name": "primaryFortress",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECJQEABLQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAwGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCEhBgM8IIIQNIWbDbvjAiCCEHZxkwi74wIgghB5RxOjuuMCFw4HBMww+EJu4wD4RvJz1PpBldTR0PpA39F1evhC8uBl+EUgbpIwcN74Qrry4Gb4AFj4biL4KPhOyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WWcjPkWAA2pLOzM3JcPsAWNs8gDLbPAEMCxUIAxDbPNs82zzyAAoJHQAI+AD4bQAI+AD4awAI+AD4bAIW7UTQ10nCAYqOgOIgDQGMcO1E0PQFcPhqcPhriPhscPhtjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G6AQPQO8r3XC//4YnD4YyQEUCCCEDS3PQa64wIgghBCQO+zuuMCIIIQcPe5r7rjAiCCEHZxkwi64wIWERAPAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAA9nGTCIMjOyg/JcPsA3vIAIAFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPD3ua+DIzsoPyXD7AN7yACADKDD4RvLgTPhCbuMA0g/R2zzbPPIAIBIdAnr4APhJIfhLvI6A3ts8jiwg+CjIz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+QLbf4Ts7NyXD7AN5bFBMACPhKwQEBGvhK+EugtA8iobQP2zwVAAj4APhqAU4w0ds8+E4hjhuNBHAAAAAAAAAAAAAAAAAtLc9BoMjOzslw+wDe8gAgBFAgghALbf4TuuMCIIIQFHslwLrjAiCCECc1l/+64wIgghA0hZsNuuMCHBsaGAM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAIBkdAFT4APhNAcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACEgd9nAzxbKD8lw+wABUDDR2zz4SyGOHI0EcAAAAAAAAAAAAAAAACnNZf/gyM7KD8lw+wDe8gAgAU4w0ds8+EwhjhuNBHAAAAAAAAAAAAAAAAAlHslwIMjOzMlw+wDe8gAgAzYw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs88gAgHh0AQPhO+E34TPhL+Er4Q/hCyMv/yz/Pg8oPyg/Myg/Oye1UAWz4ACDbPPgo+E7Iz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxZZyM+RwfuRks4ByM7Nzclw+wAfACL4AMjPhYjOgG/PQMmBAKD7AABE7UTQ0//TP9MAMdIP0g/U0g/6QNH4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShJCMAFHNvbCAwLjUxLjAAAA==",
};
module.exports = { Warrior };