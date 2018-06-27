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


/*
let sun = {
    name: 'lubo'
};

let cocaCola = Object.create(sun);
    cocaCola.age = 3232;

let ice = Object.create(cocaCola);
    ice.color = 'white';

    console.log(sun.name);
*/


//revealing module pattern
function solve(input) {
	
	let funcResutl = (function () {
		let result = {};
		
		function create(arr) {
			let name = arr[0];
			
			if (arr.length > 2) {
				let inheritName = arr[2];
				result[name] = Object.create(result[inheritName])
			} else {
				result[name] = {};
			}
		}
		
		function set(arr) {
			let objName = arr[0];
			let key = arr[1];
			let value = arr[2];
			result[objName][key] = value;
		}
		
		function print(arr) {
			let list = [];
			let name = arr[0];
			for (let key in result[name]) {
				list.push(key + ':' + result[name][key])
			}
			console.log(list.join(', '))
		}
		
		return {create, set, print}
	}());
	for (let arrElement of input) {
		let args = arrElement.split(' ');
		let command = args.shift();
		//console.log(args[0]);
		funcResutl[command](args);
	}
}

solve(['create c1',
	'create c2 inherit c1',
	'set c1 color red',
	'set c2 model new',
	'print c1',
	'print c2']
);






