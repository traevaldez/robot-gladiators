var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        // Ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player chooses to 'skip' confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") { 
            // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight! GOODBYE!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }

    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

// check enemy's health
    if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;
    
    //leave while() loop since enemy is dead
    break;
    } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left!");
    }

// Subtract the value of 'enemyAttack' from the value of 'enemyHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    console.log(
       enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

// check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left!");  
    } 
    } // end of while loop
}; // end of fight function

// run fight function to start game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

// fight each enemy robot by looping over them and fighting one at a time
    for(var i = 0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at - so it needs to have 1 added to it
            window.alert("Welcome to ROBOT GLADIATORS! Round " + (i + 1));

            // pick new enemy to fight based on the indeas of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 50;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName paramter
            fight(pickedEnemyName);

            // if player is still alive adn we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length -1) {
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

    // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle!");
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
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );

    // use swith case to carry out action
    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney -7;
            }
        else {
            window.alert("You don't have enough money!");
        }
            break;
        case 'UPGRADE':
        case 'upgrade':
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
                break;
            case 'LEAVE':
            case 'leave':
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

// start first game when page loads
startGame();

