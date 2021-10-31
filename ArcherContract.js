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
    tvc: "te6ccgECJAEABKgAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBQQjAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPA0GA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCAgBgM8IIIQNIWbDbvjAiCCEHZxkwi74wIgghB5RxOjuuMCFg8HBM4w+EJu4wD4RvJz1PpBldTR0PpA39FygA/4QvLgZfhFIG6SMHDe+EK68uBm+ABY+G4i+Cj4TsjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlnIz5FgANqSzszNyXD7AFjbPIAy2zwBDQwLCAMQ2zzbPNs88gAKCRwABPhtAAT4awAE+GoABPhsAhbtRNDXScIBio6A4h8OAYxw7UTQ9AVw+Gpw+GuI+Gxw+G2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4boBA9A7yvdcL//hicPhjIwRQIIIQNLc9BrrjAiCCEEJA77O64wIgghBw97mvuuMCIIIQdnGTCLrjAhUSERABUDDR2zz4TSGOHI0EcAAAAAAAAAAAAAAAAD2cZMIgyM7KD8lw+wDe8gAfAVAw0ds8+EohjhyNBHAAAAAAAAAAAAAAAAA8Pe5r4MjOyg/JcPsA3vIAHwMoMPhG8uBM+EJu4wDSD9HbPNs88gAfExwBkvgA+Ekh+Eu8nfhLIqG0D/hKoLQP+Gre2zyOLCD4KMjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFgHIz5Att/hOzs3JcPsA3lsUAAj4SsEBAU4w0ds8+E4hjhuNBHAAAAAAAAAAAAAAAAAtLc9BoMjOzslw+wDe8gAfBFAgghALbf4TuuMCIIIQFHslwLrjAiCCECc1l/+64wIgghA0hZsNuuMCGxoZFwM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAHxgcAFT4APhNAcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACEgd9nAzxbKD8lw+wABUDDR2zz4SyGOHI0EcAAAAAAAAAAAAAAAACnNZf/gyM7KD8lw+wDe8gAfAU4w0ds8+EwhjhuNBHAAAAAAAAAAAAAAAAAlHslwIMjOzMlw+wDe8gAfAzYw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs88gAfHRwAQPhO+E34TPhL+Er4Q/hCyMv/yz/Pg8oPyg/Myg/Oye1UAWz4ACDbPPgo+E7Iz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxZZyM+Ra8kkjs4ByM7Nzclw+wAeACL4AMjPhYjOgG/PQMmBAKD7AABE7UTQ0//TP9MAMdIP0g/U0g/6QNH4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIyIAFHNvbCAwLjUxLjAAAA==",
};
module.exports = { Archer };