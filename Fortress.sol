
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "GameObject.sol";
import "InterfaceBattleUnit.sol";

contract Fortress is GameObject {

    int16 private constant FORTRESS_DEFAULT_HEALTH_POINTS = 500;
    int16 private constant FORTRESS_DEFAULT_ARMOR_POINTS = 10;

    mapping (address => bool) public units;

    constructor() public {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();

        setHealth(FORTRESS_DEFAULT_HEALTH_POINTS);
        setArmor(FORTRESS_DEFAULT_ARMOR_POINTS);
    }

    function addUnit(address unitAddress) external {
        tvm.accept();
        units[unitAddress] = true;
    }

    function removeUnit(address unitAddress, address killerAddress) external {
        tvm.accept(); 
        delete units[unitAddress];
        if (units.empty()) {
            selfDestroyAndPay(killerAddress);
        }
    }

    function perish(address killerAddress) external override {
        tvm.accept();

        optional(address, bool) currentUnit = units.min();

        while (currentUnit.hasValue()) {
            (address currentUnitAddress, ) = currentUnit.get();
            InterfaceBattleUnit(currentUnitAddress).perish(killerAddress);
            currentUnit = units.next(currentUnitAddress);
        }

        selfDestroyAndPay(killerAddress);
    }
}
