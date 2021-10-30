
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "InterfaceGameObject.sol";

abstract contract GameObject is InterfaceGameObject {

    string public name;
    int16 public healthPoints;
    int16 public armorPoints;

    function setHealth(int16 newHealthPoints) internal {
        healthPoints = newHealthPoints;
    }

    function setArmor(int16 newArmorPoints) internal {
        armorPoints = newArmorPoints;
    }

    function setName(int16 newArmorPoints) internal {
        armorPoints = newArmorPoints;
    }

    function isEliminated() private view returns (bool) {
        return healthPoints <= 0;
    }
    
    function perish(address killerAddress) virtual external;

    function takeDamage(int16 damagePoints) external override {
        tvm.accept();
        address killerAddress = msg.sender;
        if (damagePoints > armorPoints) {
            healthPoints += armorPoints - damagePoints;
        }
        if (isEliminated()) {
            this.perish(killerAddress);
        }
    }

    function selfDestroyAndPay(address killerAddress) internal pure {
        tvm.accept();
        killerAddress.transfer(0, true, 160);
    }
}
