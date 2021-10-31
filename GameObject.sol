
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "InterfaceGameObject.sol";

abstract contract GameObject is InterfaceGameObject {

    int16 public healthPoints;
    int16 public armorPoints;
 
    function setHealth(int16 newHealthPoints) internal {
        tvm.accept();
        healthPoints = newHealthPoints;
    }

    function setArmor(int16 newArmorPoints) internal {
        tvm.accept();
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
            setHealth(healthPoints + armorPoints - damagePoints);
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
