/*
let animal = {
    name: 'lubo',
    age: 1
};
let cat = Object.create(animal);
cat.name = 'Ivan';
console.log(animal.name);
console.log(cat.name);
*/

//.............................................................................................






/*
let animal = {
    name: 'lubo',
    age: 1,
    toString: function () {
        return this.name + ' ' + this.age
    }
};
let cat = Object.create(animal);
console.log(cat + '');
*/

//............................................................................







/*
let god = {
    nameGod: 'LUBO',
};
let animal = Object.create(god);
    animal.name = 'lubo';
    animal.age = 1;

let cat = Object.create(animal);

//for (let key in cat) {
//    console.log(key + ' ' + cat[key])
//}
cat.__proto__.__proto__['age'] = 10000; //така добавяме неща към god или заменяме
//console.log(cat.__proto__); //така взима всичко на Cat
console.log(cat.__proto__.__proto__);   //така взима всичко на god
            //or
//console.log(Object.getPrototypeOf(cat));
*/



let sun = {
    name: 'lubo'
};

let cocaCola = Object.create(sun);
    cocaCola.age = 3232;

let ice = Object.create(cocaCola);
    ice.color = 'white';

    console.log(sun.name);





