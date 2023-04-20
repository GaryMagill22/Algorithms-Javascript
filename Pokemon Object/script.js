var monster = {
    // key: value
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// [0] == 'bulbasaur'
console.log(monster.name)
console.log(monster['name'])


console.log(monster.types[1])


// console.log the pokémon objects whose id is evenly divisible by 3
// You'll need modulo: %

/*
JS Objects
A collection of properties that you can access using their key name to access the value. 
For example: array.length
These are NOT ordered like an array, so they are not accessed via an index.
This exercise is practice for accessing object information.

Extra ways to access object information: 
Object.keys(objectVariable)
Object.values(objectVariable)
*/

var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types.length>=2 && pokémon[i].types[1]=="flying"){
        console.log(pokémon[i].name)
    }
};



for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id % 3 === 0) {
        console.log(pokémon[i].name);
    }
}


// Bonus Level 1: Build a function that returns an array of those Pokemon objects.

function makeArr() {
    var pokeArr = [];
    for (var i=0; i<pokémon.length; i++){
        if (pokémon[i].id % 3 === 0) {
            pokeArr.push(pokémon[i].name);
        } console.log(pokeArr);
        
    } return pokeArr;
    
};

makeArr();

// console.log the pokémon objects that have more than one type //

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length > 1) {

    } console.log(pokémon[i]);
};


// console.log the names of the pokémon whose only type is "poison" //

for (var i=0; i<pokémon.length; i++) {
    if (pokémon[i].types.length == 1 && pokémon[i].types[0] === "poison"){
        console.log(pokémon[i].name);
    } 
};

// console.log the first type of all the pokémon whose second type is "flying" //

for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types.length>=2 && pokémon[i].types[1]=="flying"){
        console.log(pokémon[i].name)
    }
};

// console.log(pokémon[1].name)

// Example Loop through an array of objects that finds ids greater than 99:

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].id > 99) {
//         console.log(pokémon[i].name);
//     }
// }



// Challenges - using the array of pokémon above and loops:

/*
============================Challenge #1 ========================================================================
console.log the pokémon objects whose id is evenly divisible by 3
You'll need modulo: %

num % 2 == 0; Something is evenly divisible by 2

Bonus Level 1: Build a function that returns an array of those Pokemon objects. 
Bonus Level 2: Modify the function to have a parameter for the divisible value.

*/

/*
============================Challenge #2 ========================================================================
console.log the pokémon objects that have more than one type

Bonus Level 1: Build a function that returns an array of those pokemon
*/

/*
============================Challenge #3 ========================================================================
console.log the names of the pokémon whose only type is "poison"

Hint: You may want to use && to check more than one condition

Bonus Level 1: Build a function that returns the array of names for pokemon with ONLY poison as a type.
Bonus Level 2: Reverse the name of those pokemon. 🐍 (Note: There's a few approaches to this, google is your friend!)
*/

/*
============================Challenge #4 ========================================================================
console.log the first type of all the pokémon whose second type is "flying"

Bonus Level 1: Build a function return an array of those pokemon found.
*/
