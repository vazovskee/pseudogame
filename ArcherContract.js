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
    tvc: "te6ccgECJQEABLUAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAwGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCEhBgM8IIIQNIWbDbvjAiCCEHZxkwi74wIgghB5RxOjuuMCFw4HBM4w+EJu4wD4RvJz1PpBldTR0PpA39FygA/4QvLgZfhFIG6SMHDe+EK68uBm+ABY+G4i+Cj4TsjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlnIz5FgANqSzszNyXD7AFjbPIAy2zwBDAsVCAMQ2zzbPNs88gAKCR0ACPgA+G0ACPgA+GsACPgA+GwCFu1E0NdJwgGKjoDiIA0BjHDtRND0BXD4anD4a4j4bHD4bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhugED0DvK91wv/+GJw+GMkBFAgghA0tz0GuuMCIIIQQkDvs7rjAiCCEHD3ua+64wIgghB2cZMIuuMCFhEQDwFQMNHbPPhNIY4cjQRwAAAAAAAAAAAAAAAAPZxkwiDIzsoPyXD7AN7yACABUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADw97mvgyM7KD8lw+wDe8gAgAygw+Eby4Ez4Qm7jANIP0ds82zzyACASHQJ6+AD4SSH4S7yOgN7bPI4sIPgoyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkC23+E7Ozclw+wDeWxQTAAj4SsEBARr4SvhLoLQPIqG0D9s8FQAI+AD4agFOMNHbPPhOIY4bjQRwAAAAAAAAAAAAAAAALS3PQaDIzs7JcPsA3vIAIARQIIIQC23+E7rjAiCCEBR7JcC64wIgghAnNZf/uuMCIIIQNIWbDbrjAhwbGhgDNjD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zzyACAZHQBU+AD4TQHIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAhIHfZwM8Wyg/JcPsAAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAApzWX/4MjOyg/JcPsA3vIAIAFOMNHbPPhMIY4bjQRwAAAAAAAAAAAAAAAAJR7JcCDIzszJcPsA3vIAIAM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAIB4dAED4TvhN+Ez4S/hK+EP4QsjL/8s/z4PKD8oPzMoPzsntVAFs+AAg2zz4KPhOyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WWcjPkcH7kZLOAcjOzc3JcPsAHwAi+ADIz4WIzoBvz0DJgQCg+wAARO1E0NP/0z/TADHSD9IP1NIP+kDR+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSQjABRzb2wgMC41MS4wAAA=",
};
module.exports = { Archer };