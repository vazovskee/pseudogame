
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "InterfaceBattleUnit.sol";
import "GameObject.sol";
import "Fortress.sol";

abstract contract BattleUnit is GameObject, InterfaceBattleUnit {

    int16 private constant UNIT_DEFAULT_HEALTH_POINTS = 50;

    string public name;
    int16 public attackPower;
    Fortress public primaryFortress;

    constructor(string newName, Fortress newFortress, int16 newArmorPoints, int16 newAttackPower) internal {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();

        primaryFortress = newFortress;
        primaryFortress.addUnit(this, newName);

        setName(newName);
        setHealth(UNIT_DEFAULT_HEALTH_POINTS);
        setArmor(newArmorPoints);
        setAttack(newAttackPower);
    }

    function setName(string newName) internal {
        name = newName;
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
