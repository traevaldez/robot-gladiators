var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

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
}

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to ROBOT GLADIATORS! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                shop();
                }
            }
        }
        else {
        window.alert('You have lost your robot in battle! It was a slaughter! GAME OVER!');
        }
    }

    function endGame() {
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
    startGame();
    endGame();

    var shop = function () {
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        
    }
}; 

