const Fortress = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "addUnit",
                "inputs": [
                    {
                        "name": "unitAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "removeKilledUnit",
                "inputs": [
                    {
                        "name": "unitAddress",
                        "type": "address"
                    },
                    {
                        "name": "killerAddress",
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
                "name": "units",
                "inputs": [],
                "outputs": [
                    {
                        "name": "units",
                        "type": "map(address,bool)"
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
                "name": "units",
                "type": "map(address,bool)"
            }
        ]
    },
    tvc: "te6ccgECIgEABBcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsfBQQhAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPA8GA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPB4eBgIoIIIQOmufjLvjAiCCEHD3ua+74wIVBwRQIIIQQkDvs7rjAiCCEGi1Xz+64wIgghBwfuRkuuMCIIIQcPe5r7rjAhANCQgBUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADw97mvgyM7KD8lw+wDe8gAdA0gw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39HbPNs88gAdChsBJvgAAfhMgQEL9FkwIPhsbo6A3jALAQYg2zwMACL4AMjPhYjOgG/PQMmBAKD7AARWMPhCbuMA+Ebyc9H4QvLgZfhFIG6SMHDe+EK68uBm+ACAZNs8ets82zzyAA8UDhsACPgA+GsBUO1E0NdJwgGKjh1w7UTQ9AVw+Gpw+Gtt+GyAQPQO8r3XC//4YnD4Y+IdAygw+Eby4Ez4Qm7jANIP0ds82zzyAB0RGwJ6+AD4SSH4S7yOgN7bPI4sIPgoyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkC23+E7Ozclw+wDeWxMSAAj4SsEBARr4SvhLoLQPIqG0D9s8FAAI+AD4agRQIIIQC23+E7rjAiCCECc1l/+64wIgghAqpk24uuMCIIIQOmufjLrjAhoZGBYDNjD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zzyAB0XGwAe+AD4TMjPg1mBAQv0QfhsAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAAqqZNuIMjO9ADJcPsA3vIAHQFQMNHbPPhLIY4cjQRwAAAAAAAAAAAAAAAAKc1l/+DIzsoPyXD7AN7yAB0DNjD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zzyAB0cGwA0+Ez4S/hK+EP4QsjL/8s/z4PKD8oP9ADJ7VQAuvgA+EyBAQv0gm+hlgHXCgBvAt6TIG6zjkIgbvJ/byIwXMjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFgHIz5Att/hOzs3JcPsA+EyBAQv0dG+hlgHXCgBvAt7oWwA27UTQ0//TP9MAMdIP0g/0BNH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEhIAAUc29sIDAuNTEuMAAA",
};
module.exports = { Fortress };