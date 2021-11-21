pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokodefiERC20 is ERC20 {
    
    mapping(address => bool) private _owners;
    
    constructor(address _addExtraOwner, string memory _name, string memory _symbol, uint256 _amount) ERC20(_name, _symbol){
        _mint(msg.sender, _amount * (10 ** decimals()));
        _owners[msg.sender] = true;
        _owners[_addExtraOwner] = true;
    }
    
    
    modifier onlyOwner(){
        require(_owners[msg.sender], "must owner" );
        _;
    }
    
    function newMintToken(address _targetReceiver, uint256 _amount) onlyOwner() external {
       _mint(_targetReceiver, _amount * (10 ** decimals()));
    }
    
    
}
