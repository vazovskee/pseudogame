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
                    },
                    {
                        "name": "unitName",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "removeUnit",
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
                        "type": "map(address,string)"
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
                "type": "map(address,string)"
            }
        ]
    },
    tvc: "te6ccgECIQEABAwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gseBQQgAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAwGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPB0dBgIoIIIQQkDvs7vjAiCCEHD3ua+74wISBwRQIIIQWAA2pLrjAiCCEFrySSO64wIgghBotV8/uuMCIIIQcPe5r7rjAhANCQgBUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADw97mvgyM7KD8lw+wDe8gAcBFgw+EJu4wD4RvJz0fhC8uBl+EUgbpIwcN74Qrry4Gb4AIEB9Ns8ets82zzyAAwLChkABPhrAAT4agFQ7UTQ10nCAYqOHXDtRND0BXD4anD4a234bIBA9A7yvdcL//hicPhj4hwDSDD4RvLgTPhCbuMA+kGV1NHQ+kDf+kGV1NHQ+kDf0ds82zzyABwOGQEm+AAB+EyBAQv0WTAg+GxujoDeMA8BBiDbPBsDODD4RvLgTPhCbuMA+kGV1NHQ+kDf1NHbPNs88gAcERkAGPgAAfhMgQEL9BP4bARQIIIQC23+E7rjAiCCEB7j2zC64wIgghAnNZf/uuMCIIIQQkDvs7rjAhgXFhMDKDD4RvLgTPhCbuMA0g/R2zzbPPIAHBQZAZL4APhJIfhLvJ34SyKhtA/4SqC0D/hq3ts8jiwg+CjIz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+QLbf4Ts7NyXD7AN5bFQAI+ErBAQFQMNHbPPhLIY4cjQRwAAAAAAAAAAAAAAAAKc1l/+DIzsoPyXD7AN7yABwBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAACe49swgyM70AMlw+wDe8gAcAzYw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs88gAcGhkANPhM+Ev4SvhD+ELIy//LP8+Dyg/KD/QAye1UAbb4APhMgQEL9INvoZMBbwLekyBus45BIG7yf28iMFzIz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+QLbf4Ts7NyXD7APhMgQEL9HRvoZUB10xvAt7oMNs8GwAi+ADIz4WIzoBvz0DJgQCg+wAANu1E0NP/0z/TADHSD9IP9ATR+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIB8AFHNvbCAwLjUxLjAAAA==",
};
module.exports = { Fortress };