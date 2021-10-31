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
    tvc: "te6ccgECJAEABKcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBQQjAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPA0GA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCAgBgM8IIIQNIWbDbvjAiCCEHZxkwi74wIgghB5RxOjuuMCFg8HBMww+EJu4wD4RvJz1PpBldTR0PpA39F1evhC8uBl+EUgbpIwcN74Qrry4Gb4AFj4biL4KPhOyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WWcjPkWAA2pLOzM3JcPsAWNs8gDLbPAENDAsIAxDbPNs82zzyAAoJHAAE+G0ABPhrAAT4agAE+GwCFu1E0NdJwgGKjoDiHw4BjHDtRND0BXD4anD4a4j4bHD4bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhugED0DvK91wv/+GJw+GMjBFAgghA0tz0GuuMCIIIQQkDvs7rjAiCCEHD3ua+64wIgghB2cZMIuuMCFRIREAFQMNHbPPhNIY4cjQRwAAAAAAAAAAAAAAAAPZxkwiDIzsoPyXD7AN7yAB8BUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADw97mvgyM7KD8lw+wDe8gAfAygw+Eby4Ez4Qm7jANIP0ds82zzyAB8THAGS+AD4SSH4S7yd+EsiobQP+EqgtA/4at7bPI4sIPgoyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkC23+E7Ozclw+wDeWxQACPhKwQEBTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAAC0tz0GgyM7OyXD7AN7yAB8EUCCCEAtt/hO64wIgghAUeyXAuuMCIIIQJzWX/7rjAiCCEDSFmw264wIbGhkXAzYw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs88gAfGBwAVPgA+E0ByM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAISB32cDPFsoPyXD7AAFQMNHbPPhLIY4cjQRwAAAAAAAAAAAAAAAAKc1l/+DIzsoPyXD7AN7yAB8BTjDR2zz4TCGOG40EcAAAAAAAAAAAAAAAACUeyXAgyM7MyXD7AN7yAB8DNjD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zzyAB8dHABA+E74TfhM+Ev4SvhD+ELIy//LP8+Dyg/KD8zKD87J7VQBbPgAINs8+Cj4TsjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlnIz5FrySSOzgHIzs3NyXD7AB4AIvgAyM+FiM6Ab89AyYEAoPsAAETtRNDT/9M/0wAx0g/SD9TSD/pA0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEjIgAUc29sIDAuNTEuMAAA",
};
module.exports = { Warrior };