let Trainer = {
    name: "Brendan",
    age: 27,
    //methods
    //array
    pokemon: [
        'Sceptile',
        'Blastoise',
        'Gengar',
        'Rayquaza'
    ],
    talk: function(){
        console.log('pokemon i choose you !')
    },

    friends: {
        Gary: {
            name: 'Oak',
            level: 100
        },
        Ash: {
            titles: 'Rookie Trainer',
            name: 'Ketchum',
            level: 50
        }
    },
    attack: function(){
        console.log("This Pokemon used Quick Attack on targetPokemon")
        console.log("It was very effective! targetPokemon's health is now reduced to targetPokemonHealth")
    },
    dead: function(){
        console.log("Pokemon has fainted.")
    }
}

function Pokemon(name,level,endurance,strength){
    this.name = name;
    this.level = level;
    this.endurance = 1 * level;
    this.strength = 1 * level;

    this.talk = function(){
        console.log('Rival Gary has challenged you to a battle!')
        console.log('Go ' + this.name + ' !')
    }

    this.attack = function(target){
        console.log('Rival Gary brought out Blastoise')
        console.log(this.name + ' used Leaf Blade on ' + target.name)
        var totalEndurance = target.endurance - this.strength;
        console.log('Its Super Effective!')
        console.log(target.name + ' health is now reduced to ' + totalEndurance)
        if (totalEndurance <= 0){
            this.dead(target.name)
        }
    }

    this.dead = function(target){
         console.log(target + ' has fainted.')
           
        }

}

//unique instance
let Sceptile = new Pokemon(Trainer.pokemon[0], 100)
let Blastoise = new Pokemon(Trainer.pokemon[1], 99)
let Gengar = new Pokemon(Trainer.pokemon[2], 43)
let Rayquaza = new Pokemon(Trainer.pokemon[3], 23)

Sceptile.talk();
Sceptile.attack(Blastoise);