
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "InterfaceBattleUnit.sol";
import "GameObject.sol";
import "Fortress.sol";

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

        setHealth(UNIT_DEFAULT_HEALTH_POINTS);
        setArmor(newArmorPoints);
        setAttack(newAttackPower);
    }

    function setAttack(int16 newAttackPower) internal {
        attackPower = newAttackPower;
    }

    function attack(InterfaceGameObject gameObject) external override {
        tvm.accept();
        gameObject.takeDamage(attackPower);
    }

    function perish(address killerAddress) external override(GameObject, InterfaceBattleUnit) {
        tvm.accept();
        selfDestroyAndPay(killerAddress);
        primaryFortress.removeUnit(address(this), killerAddress);
    }
}
