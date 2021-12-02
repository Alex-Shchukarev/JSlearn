"use strict";

class InputNameError extends Error {
    constructor( message ) {
        super( message );
        this.name = "NameError";
    }

}

class Unit {
    constructor( kind, genus ) {
        this.kind = kind;
        this.health = 100;
        this.iniсiative = 10;
        this.armor = 0;
        this.damage = 10;
        this.id = genus;
    }

    attack( opponent ) {
        let damage = this.damage - this.damage * opponent.armor / 100;
        opponent.health = opponent.health - damage;
        console.log(`unit ${this.id} ${this.kind} attack unit ${opponent.id} ${opponent.kind} with damage ${damage}`);
    }

    defend() {
        this.armor = 50;
        console.log(`unit ${this.id} ${this.kind} defend, armor ${this.armor}`);
    }

    upgrade( skill ) {
        switch ( skill ) {
            case 'weapon':
                this.damage += 10;
                break;
            
            case 'heal':
                this.health += 20;
                break;

            case 'reaction':
                this.iniсiative += 20;

            default:
                this.defend();
                break;
        }
        console.log(`unit ${this.id} ${this.kind} upgraded health-${this.health}, armor-${this.armor}, iniciative-${this.iniсiative}, damage-${this.damage}`);
    }

}

class Specialization extends Unit {
    constructor( kind, genus, combat ) {
        super( kind, genus )
        this.combat = combat;
        this.name = 'Noname';
    }

    static choosePlayer( player1, player2 ) {
    
        let choice = Math.round( Math.random() );
        if( choice == 1 ) return player2;
        else return player1;
    
    }

    static actionPlayer( turn, player, opponent ) {
        switch ( turn ) {
            case 1:
                player.attack( opponent );
                break;
    
            case 2:
                player.defend();
                break;
        
            case 3:
                player.upgrade( prompt('enter type of upgrade - weapon, heal or reaction', 'weapon') );
                break;
    
            default:
                player.defend();
                break;
        }
        
    }

    get description() {
        return `${this.name} ${this.kind} ${this.combat}`;
    }
        

}

let soldier1 = new Specialization( 'Knight', 'People', 'close combat' );
let soldier2 = new Specialization( 'Archer', 'People', 'ranged combat' );
let nameUnit;

try {
    nameUnit = prompt( "Enter name of unit1: ", 'Artur' );
    if( nameUnit == '' || nameUnit == null || nameUnit == undefined || nameUnit == ' ' ) throw new InputNameError( 'Uncorrect name!' );
} catch (err) {
    alert( 'Undefined name of unit or '+ err.message );
    nameUnit = 'Artur';
}

soldier1.name = nameUnit;
soldier2.name = 'Lancelot';

console.log( soldier1.description );


let winner;
let turnPlayer1;
let turnPlayer2;

alert( `Welcome ${soldier1.id} ${soldier1.kind} and ${soldier2.id} ${soldier2.kind}! Fight!`);


while( true ) {

    soldier1.iniсiative += 10;
    soldier2.iniсiative += 10;

    if( soldier1.health <= 0 ) {
        console.log( `${soldier1.id} ${soldier1.kind} was killed ...`);
        winner = soldier2;
        break;
    }
    if( soldier2.health <= 0 ) {
        console.log( `${soldier2.id} ${soldier2.kind} was killed ...`);
        winner = soldier1;
        break;
    }
    
    if( soldier1.iniсiative == soldier2.iniсiative ) {
        let result = Specialization.choosePlayer( soldier1, soldier2 );
        if( result == 'player1' ) {
            soldier1.iniсiative -= 20;
            turnPlayer1 = +prompt('Player1 choose action: 1 - attack, 2 - defend, 3 - upgrade ?', 3 );
            Specialization.actionPlayer( turnPlayer1, soldier1, soldier2 );

        }
        else {
            soldier2.iniсiative -= 20;
            turnPlayer2 = +prompt('Player2 choose action: 1 - attack, 2 - defend, 3 - upgrade ?', 3 );
            Specialization.actionPlayer( turnPlayer2, soldier2, soldier1 );
        }
    }
    else if( soldier1.iniсiative > soldier2.iniсiative ) {
        soldier1.iniсiative -= 20;
        turnPlayer1 = +prompt('Player1 choose action: 1 - attack, 2 - defend, 3 - upgrade ?', 3 );
        Specialization.actionPlayer( turnPlayer1, soldier1, soldier2 );
    }
    else if( soldier2.iniсiative > soldier1.iniсiative ) {
        soldier2.iniсiative -= 20;
        turnPlayer2 = +prompt('Player2 choose action: 1 - attack, 2 - defend, 3 - upgrade ?', 3 );
        Specialization.actionPlayer( turnPlayer2, soldier2, soldier1 );
    } 

    alert(`Player1-${soldier1.id} ${soldier1.kind}, health-${soldier1.health}, armor-${soldier1.armor},
        iniciative-${soldier1.iniсiative}, damage-${soldier1.damage};
        Player2-${soldier2.id} ${soldier2.kind}, health-${soldier2.health}, armor-${soldier2.armor},
        iniciative-${soldier2.iniсiative}, damage-${soldier2.damage} `);

}
console.log( `Game finished! The winner ${winner.id} ${winner.kind}` );
