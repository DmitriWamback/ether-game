pragma solidity ^0.5.0;

contract Core {
  
    mapping(address => User) users;
    mapping(int => Post)     posts;

    struct User {
        string          username;
        address payable uniqueIdentifier;
        int             score;
        bool            exists;
        bytes32         pHash;
    }

    struct Post {
        string          description;
        uint            tipAmount;
        int             score;
        address payable author;
    }

    function onEntered(address payable wallet, string memory username, string memory password) public {

        if (users[wallet].exists == false) {
            User memory u;
            u.uniqueIdentifier = wallet;
            u.username         = username;
            u.score            = 0;
            u.pHash            = sha256(abi.encodePacked(password));
            u.exists           = true;

            users[wallet] = u;
        }
    }

    function tipUser(address payable id) public payable {
        address(id).transfer(msg.value);
    }
}