const fs = require('fs')
const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function Game () {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    this.currentEnemy = this.enemies[0];
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
};

Game.prototype.battle = function () {
    if (this.isPlayerTurn) {
        // player prompts will go here
    } else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);

        console.log(`You were attacked by the ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());
    }
};

Game.prototype.checkEndOfBattle = function () {
    if (this.player.isAlive() && this.currentEnemy.isAlive()) {
        this.isPlayerTurn = !this.isPlayerTurn;
        this.battle();
    }    else if (this,player.isAlive() && !this.currentEnemy.isAlive()) {
        console.log(`You've defeated the ${this.currentEnemy.name}`);

        this.player.addPotion(this.currentEnemy.potion);
        console.log(`${this.player.name} found a ${this.currentEnemy.potion.name}`);

        this.roundNumber++;

        if (this.roundNumber < this.enemy.length) {
            this.currentEnemy = this.enemies[this.roundNumber];
            this.startNewBattle();
        } else {
            console.log('You win!');
        }
    }};

if (this.isPlayerTurn) {
    inquirer
    .prompt()
    .then(({ action }) => {
        if (action === 'Use potion') {
            if (!this.player.getInventory()) {
                // after player sees their empty inventory

                return this.checkEndOfBattle();
            }

            inquirer
            .prompt()
            .then(({ action }) => {
                // after player uses a potion

                this.checkEndOfBattle();
            });
        } else {
            // after player attacks

            this.checkEndOfBattle();
        }
    });
} else {
    // after enemy attacks

    this.checkEndOfBattle();
}
else {
    console.log("You've been defeated!");
};









module.exports= Game;