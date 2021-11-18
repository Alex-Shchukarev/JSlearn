let tpl1 = 'background-color:lightgrey; border:2px solid darkgrey; font-size:14px; font-weight:bold; padding:3px 5px; border-radius:5px; color:';

let cowName = ["mikki", "lusi", "burenka"];
let cows = [];

let person = {
    name: "John",
    profession: "farmer",
    estate: "farm",
    fullness: 20,
    warehouse: 3,
    happiness: 25,
    health: true,

    sleep: function() { 
        
        this.happiness += 5; 
        console.log(`%c${this.profession} ${this.name} sleeping...`, tpl1+'blue'); 
    },
    
    milking: function() {
        
        for( let i = 0; i < cows.length; i++ ) {
            cows[i].giveMilk();
        }

        this.warehouse += 3;
        this.fullness -= 10;
        this.happiness += 1;

        console.log(`%c${this.profession} ${this.name} milking ${cows.length} cows`, tpl1+'black');
    },

    graze: function() {

        this.fullness -= 5; 
        this.happiness -= 10; 
        console.log(`%c${this.profession} ${this.name} grazing ${cows.length} cows on the ${this.estate}`, tpl1+'green');
    },

    drink: function() { 
        this.fullness += 10;
        this.warehouse -= 3; 
        console.log(`%c${this.profession} ${this.name} drank milk`, tpl1+'red'); 
    }
};

let cow = {
    reserveMilk: 1,
    fullness: 25,
    health: true,

    giveMilk: function() {
        
        if( !this.health ) return;
        else {
        console.log(`%cCow ${this.nickname} give ${this.reserveMilk} litres of milk`, tpl1+'orange');
        this.reserveMilk -= 1;
        this.fullness -= 10;
        }
    },

    eatGrass: function() {
        
        if( !this.health ) return;
        else {
        this.fullness += 15;
        this.reserveMilk += 1;
        console.log(`%cCow ${this.nickname} ate a lot of delicious grass`, tpl1+'brown');
        }
    },

    moo: function() {
        if( !this.health ) return;
        else {
        this.fullness -= 5;
        console.log(`%cCow ${this.nickname} did moo, it wants to eat`, tpl1+'magenta');
        return
        }
    }
};

alert("A farmer and three cows live on the farm");

for( let i = 0; i < cowName.length; i++ ) {
    
    cows.push( Object.assign( {}, cow ) );
    cows[i].nickname = cowName[i];
}

console.log("Life on the farm emulate...");

let rand;

for( let i = 1; i <= 14; i++ ) {
    
    if( person.fullness <= 10 ) {
        person.drink();
        console.log(`The ${i} day, ${person.profession} ${person.name}: fullness-${person.fullness}, happiness-${person.happiness},
        quontity of milk-${person.warehouse} litres, health-${person.health}`);
        for( let i = 0; i < cows.length; i++ ) {
            console.log(`Cow ${cows[i].nickname}: fullness-${cows[i].fullness}, can give-${cows[i].reserveMilk} milk litres, 
            health-${cows[i].health}`);
        }
        console.log(' ');
        continue;
    }
    
    if( person.happiness <= 10 ) {
        person.sleep();
        console.log(`The ${i} day, ${person.profession} ${person.name}: fullness-${person.fullness}, happiness-${person.happiness},
        quontity of milk-${person.warehouse} litres, health-${person.health}`);
        for( let i = 0; i < cows.length; i++ ) {
            console.log(`Cow ${cows[i].nickname}: fullness-${cows[i].fullness}, can give-${cows[i].reserveMilk} milk litres, 
            health-${cows[i].health}`);
        }
        console.log(' ');
        continue;
    }
    
    if( person.warehouse <= 3 ) {
        person.graze();
        person.milking();
        for( let i = 0; i < cows.length; i++ ) {
            cows[i].eatGrass()
        }
        console.log(`The ${i} day, ${person.profession} ${person.name}: fullness-${person.fullness}, happiness-${person.happiness},
        quontity of milk-${person.warehouse} litres, health-${person.health}`);
        for( let i = 0; i < cows.length; i++ ) {
            console.log(`Cow ${cows[i].nickname}: fullness-${cows[i].fullness}, can give-${cows[i].reserveMilk} milk litres, 
            health-${cows[i].health}`);
        }
        console.log(' ');
        continue;
    }

    rand = Math.round( ( Math.random() * 10 ), 0 );

    switch (rand) {
        case 1:
            person.drink();
            break;
    
        case 3:
            person.sleep();
            break;

        case 4:
            person.milking();
            break;

        case 7:
            person.graze();
            break;

        default:
            cows.forEach( item => item.moo() )
            break;
    }
    
    if( person.fullness <= 0 || person.happiness <= 0 ) {
        person.health = false;
    }
    
    for( let i = 0; i < cows.length; i++ ) {
        if( cows[i].fullness <= 0 ) cows[i].health = false;
    }

    if( !person.health ) {
        console.log(`${person.profession} ${person.name} died ...`);
        break;
    }

    console.log(`The ${i} day, ${person.profession} ${person.name}: fullness-${person.fullness}, happiness-${person.happiness},
    quontity of milk-${person.warehouse} litres, health-${person.health}`);
    for( let i = 0; i < cows.length; i++ ) {
        console.log(`Cow ${cows[i].nickname}: fullness-${cows[i].fullness}, can give-${cows[i].reserveMilk} milk litres, 
        health-${cows[i].health}`);
    }
    console.log(' ');
}
console.log("Emulate finished!");
