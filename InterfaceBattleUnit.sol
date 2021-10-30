
pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "InterfaceGameObject.sol";

interface InterfaceBattleUnit {
    function attack(InterfaceGameObject gameObject) external;
    function perish(address killerAddress) external;
}
