// var playerName = 'Igor';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// enemy 'Roborto' stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to ROBOT GLADIATORS!");

    // Ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // If player chooses to fight, fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

// check enemy's health
    if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
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
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left!");  
    } 

    // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") { 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight! GOODBYE!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    } 
    // if no (false), ask question again by running fight () again
    else {
        fight();
    }
    // if player did not chose 1 or 2 in prompt
    } else {
        window.alert("You need to pick a valid option. Try again.");
    }
}
// end of fight function

// run fight function to start game
fight();