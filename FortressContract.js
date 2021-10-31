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
    tvc: "te6ccgECIgEABBUAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsfBQQhAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPA4GA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPB4eBgIoIIIQQkDvs7vjAiCCEHD3ua+74wIRBwRQIIIQWAA2pLrjAiCCEGi1Xz+64wIgghBwfuRkuuMCIIIQcPe5r7rjAg8MCQgBUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADw97mvgyM7KD8lw+wDe8gAdA0gw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39HbPNs88gAdChoBJvgAAfhMgQEL9FkwIPhsbo6A3jALAQYg2zwcBFgw+EJu4wD4RvJz0fhC8uBl+EUgbpIwcN74Qrry4Gb4AIEB9Ns8ets82zzyAA4WDRoACPgA+GsBUO1E0NdJwgGKjh1w7UTQ9AVw+Gpw+Gtt+GyAQPQO8r3XC//4YnD4Y+IdAzgw+Eby4Ez4Qm7jAPpBldTR0PpA39TR2zzbPPIAHRAaABj4AAH4TIEBC/QT+GwEUCCCEAtt/hO64wIgghAe49swuuMCIIIQJzWX/7rjAiCCEEJA77O64wIZGBcSAygw+Eby4Ez4Qm7jANIP0ds82zzyAB0TGgJ6+AD4SSH4S7yOgN7bPI4sIPgoyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkC23+E7Ozclw+wDeWxUUAAj4SsEBARr4SvhLoLQPIqG0D9s8FgAI+AD4agFQMNHbPPhLIY4cjQRwAAAAAAAAAAAAAAAAKc1l/+DIzsoPyXD7AN7yAB0BUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAACe49swgyM70AMlw+wDe8gAdAzYw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs88gAdGxoANPhM+Ev4SvhD+ELIy//LP8+Dyg/KD/QAye1UAbb4APhMgQEL9INvoZMBbwLekyBus45BIG7yf28iMFzIz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+QLbf4Ts7NyXD7APhMgQEL9HRvoZUB10xvAt7oMNs8HAAi+ADIz4WIzoBvz0DJgQCg+wAANu1E0NP/0z/TADHSD9IP9ATR+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShISAAFHNvbCAwLjUxLjAAAA==",
};
module.exports = { Fortress };