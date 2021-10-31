
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "BattleUnit.sol";

contract Warrior is BattleUnit {
    
    int16 private constant WARRIOR_DEFAULT_ARMOR_POINTS = 5;
    int16 private constant WARRIOR_DEFAULT_ATACK_POWER = 15;

    constructor(Fortress newFortress)
        BattleUnit(newFortress, WARRIOR_DEFAULT_ARMOR_POINTS, WARRIOR_DEFAULT_ATACK_POWER) public {}
}
