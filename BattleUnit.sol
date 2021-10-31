
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "InterfaceBattleUnit.sol";
import "GameObject.sol";
import "Fortress.sol";

// используется абстрактный контракт, т.к. для него не предполагается создание экземпляров
abstract contract BattleUnit is GameObject, InterfaceBattleUnit {

    int16 private constant UNIT_DEFAULT_HEALTH_POINTS = 50;

    int16 public attackPower;
    Fortress public primaryFortress;

    constructor(Fortress newFortress, int16 newArmorPoints, int16 newAttackPower) internal {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();

        primaryFortress = newFortress;
        primaryFortress.addUnit(this);

        setHealthPoints(UNIT_DEFAULT_HEALTH_POINTS);
        setArmorPoints(newArmorPoints);
        setAttackPower(newAttackPower);
    }

    function setAttackPower(int16 newAttackPower) internal {
        tvm.accept();
        attackPower = newAttackPower;
    }

    // передаёт урон равный attackPower объекту gameObject
    function attack(InterfaceGameObject gameObject) external override {
        tvm.accept();
        gameObject.takeDamage(attackPower);
    }

    // удаляет юнита из крепости и уничтожает его
    function perish(address killerAddress) external override(GameObject, InterfaceBattleUnit) {
        tvm.accept();
        primaryFortress.removeKilledUnit(address(this), killerAddress);
        selfDestroyAndPay(killerAddress);
    }
}
