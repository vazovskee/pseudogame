
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "InterfaceGameObject.sol";

// используется абстрактный контракт, т.к. для него не предполагается создание экземпляров
abstract contract GameObject is InterfaceGameObject {

    int16 public healthPoints;
    int16 public armorPoints;
 
    function setHealthPoints(int16 newHealthPoints) internal {
        tvm.accept();
        healthPoints = newHealthPoints;
    }

    function setArmorPoints(int16 newArmorPoints) internal {
        tvm.accept();
        armorPoints = newArmorPoints;
    }

    function isEliminated() private view returns (bool) {
        return healthPoints <= 0;
    }
    
    // виртуальная функция для уничтожения игрового объекта 
    function perish(address killerAddress) virtual external;

    // функция, передающая урон объекту
    function takeDamage(int16 damagePoints) external override {
        tvm.accept();
        address killerAddress = msg.sender;
        if (damagePoints > armorPoints) {
            setHealthPoints(healthPoints + armorPoints - damagePoints);
        }
        if (isEliminated()) {
            this.perish(killerAddress); // уничтожает объект, если у него не осталось здоровья 
        }
    }

    // уничтожает контракт и переводит все кристаллы по адресу killerAddress
    function selfDestroyAndPay(address killerAddress) internal pure {
        tvm.accept();
        killerAddress.transfer(0, true, 160);
    }
}
