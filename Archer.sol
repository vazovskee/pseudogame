
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "BattleUnit.sol";

contract Archer is BattleUnit {

    int16 private constant ARCHER_DEFAULT_ARMOR_POINTS = 2;
    int16 private constant ARCHER_DEFAULT_ATACK_POWER = 20;

    constructor(Fortress newFortress) 
        BattleUnit(newFortress, ARCHER_DEFAULT_ARMOR_POINTS, ARCHER_DEFAULT_ATACK_POWER) public {}
}
