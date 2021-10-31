const Archer = {
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
                "name": "attackPower",
                "type": "int16"
            },
            {
                "name": "primaryFortress",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECIgEABGYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsfBQQhAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPA4GA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPB4eBgIoIIIQNLc9BrvjAiCCEHZxkwi74wIUBwRQIIIQQkDvs7rjAiCCEEdWVNy64wIgghBw97mvuuMCIIIQdnGTCLrjAg8KCQgBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD2cZMIgyM7KD8lw+wDe8gAdAVAw0ds8+EohjhyNBHAAAAAAAAAAAAAAAAA8Pe5r4MjOyg/JcPsA3vIAHQTGMPhCbuMA+Ebyc/pBldTR0PpA39FygBT4QvLgZfhFIG6SMHDe+EK68uBm+ABY+G34KPhNyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkOmufjLOzclw+wCAMts8Ads8DhMNCwIM2zzbPPIADBoACPgA+GwACPgA+GsBnO1E0NdJwgGKjkNw7UTQ9AVw+Gpw+Gtw+GyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bYBA9A7yvdcL//hicPhj4h0DKDD4RvLgTPhCbuMA0g/R2zzbPPIAHRAaAnr4APhJIfhLvI6A3ts8jiwg+CjIz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+QLbf4Ts7NyXD7AN5bEhEACPhKwQEBGvhK+EugtA8iobQP2zwTAAj4APhqBFAgghALbf4TuuMCIIIQJzWX/7rjAiCCEDSFmw264wIgghA0tz0GuuMCGRgWFQFOMNHbPPhNIY4bjQRwAAAAAAAAAAAAAAAALS3PQaDIzs7JcPsA3vIAHQM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAHRcaAFT4APhMAcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACEgd9nAzxbKD8lw+wABUDDR2zz4SyGOHI0EcAAAAAAAAAAAAAAAACnNZf/gyM7KD8lw+wDe8gAdAzYw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs88gAdGxoAOvhN+Ez4S/hK+EP4QsjL/8s/z4PKD8oPyg/Oye1UAWz4ACD4KPhNyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WWcjPkcH7kZLOAcjOzc3JcPsA2zwcACL4AMjPhYjOgG/PQMmBAKD7AAA+7UTQ0//TP9MAMdIP0g/SD/pA0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShISAAFHNvbCAwLjUxLjAAAA==",
};
module.exports = { Archer };