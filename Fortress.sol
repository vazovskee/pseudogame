
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "GameObject.sol";
import "InterfaceBattleUnit.sol";

contract Fortress is GameObject {

    int16 private constant FORTRESS_DEFAULT_HEALTH_POINTS = 100;
    int16 private constant FORTRESS_DEFAULT_ARMOR_POINTS = 10;

    mapping (address => bool) public units; // хранит всех юнитов

    constructor() public {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();

        setHealthPoints(FORTRESS_DEFAULT_HEALTH_POINTS);
        setArmorPoints(FORTRESS_DEFAULT_ARMOR_POINTS);
    }

    // добавляет юнита
    function addUnit(address unitAddress) external {
        tvm.accept();
        units[unitAddress] = true;
    }

    // удаляет юнита (и крепость, если юнитов не осталось)
    function removeKilledUnit(address unitAddress, address killerAddress) external {
        tvm.accept(); 
        delete units[unitAddress];
        // крепость без защитников автоматически разрушается
        if (units.empty()) {
            selfDestroyAndPay(killerAddress);
        }
    }
    
    // уничтожает крепость и всех юнитов, привязанных к ней
    function perish(address killerAddress) external override {
        tvm.accept();

        optional(address, bool) currentUnit = units.min();

        while (currentUnit.hasValue()) {
            (address currentUnitAddress, ) = currentUnit.get();
            InterfaceBattleUnit(currentUnitAddress).perish(killerAddress);
            currentUnit = units.next(currentUnitAddress);
        }
    }
}
