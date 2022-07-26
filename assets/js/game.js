/*GAME FUNCTIONS */

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again!");
        return fightOrSkip();
    }

    // if player picks skip
    promptFight =promptFight.toLowerCase();

    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight! Goodbye!");
            playerInfo.money = playerInfo.money - 10;
            

            return true;
        }
    }
    return false;
}
var fight = function(enemy) {
    console.log(enemy);
    var isPlayerTurn = true;

    if (Math.random() > 0.5){
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
        // Ask player if they'd like to fight or run
        if (fightOrSkip()){
            break;
        } 
    
    

    //remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

// check enemy's health
    if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");

    // award player money for winning
    playerInfo.money = playerInfo.money + 20;
    break;
    //leave while() loop since enemy is dead
    } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left!");
    }

// Subtract the value of 'enemy.attack' from the value of 'enemy.health' and use that result to update the value in the 'playerInfo.health' variable.
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
       enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

// check player's health
    if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left!");  
    } 

    } // end of while loop
    isPlayerTurn = !isPlayerTurn;
}// end of fight function
};

// run fight function to start game
var startGame = function() {
    //reset player stats
    playerInfo.reset ();

// fight each enemy robot by looping over them and fighting one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at - so it needs to have 1 added to it
            window.alert("Welcome to ROBOT GLADIATORS! Round " + (i + 1));

            // pick new enemy to fight based on the indeas of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            //reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemy.name paramter
            fight(pickedEnemyObj);

            // if player is still alive adn we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                // ask if player wants to use the store before next rounf
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                // if yes, take them to the store() function
                if (storeConfirm) {
                shop();
                }
            }
        }
        // if player is not alive, break out of the loop and let endGame function run
        else {
        window.alert('You have lost your robot in battle! It was a slaughter! GAME OVER!');
        }
    }

    // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");

    var highScore = localStorage.getItem("highscore");
    if (highScore ===null ) {
        highScore = 0;
    }

    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);
    }


    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing ROBOT GLADIATORS! Come back soon!");
    }
};

    var shop = function () {
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for 'REFILL', 2 for 'UPGRADE', or 3 to 'LEAVE'."
        );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    // use swith case to carry out action
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
                window.alert('Leaving the store.');

            // do nothing, so function will end
            break;
            default:
            window.alert('You did not pick a valid option. Try again');

            // call shop() again to force player to pick a valid option
            shop();
            break;
        }
    };


// player stats
getPlayerName = function(){
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health +=20;
            this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
},

    upgradeAttack: function(){
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -=7;
    }
    else {
        window.alert("You don't have enough money!");
    }
}

};

// enemy stats
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumple",
        attack: randomNumber(10, 14)
    }
];

// start first game when page loads
startGame();

