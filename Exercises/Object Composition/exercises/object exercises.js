/*
let rect = {
	width: 10,
	height: 4,
	grow: function (w, h) {
		this.width += w; this.height += h;
	},
	print: function () {
		console.log(`[${this.width} * ${this.height}]`);
		//console.log(this.width * this.height);
	}
};
rect.grow(2, 3);
rect.print();
*/


/*
// -- "Revealing Module" Pattern
function listProcessor(arr) {
	
	let commandExecutor = (function () {
		let list = [];
		function add(str) {
			list.push(str)
		}
		function remove(str) {
			list = list.filter(el => el !== str) //маха всички повторения
		}
		function print() {
			console.log(list.join(','))
		}
		return {add, remove, print}
	}());
	for (let arrElement of arr) {
		let [command, value] = arrElement.split(' ');
		commandExecutor[command](value)
	}
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
*/



let fatherCar = {
	brand: 'BMW',
	model: 'X5',
	color: 'red',
	toString: function () {
		return this.brand + ' ' + this.model + ' ' + this.color
	}
};

let myCar = Object.create(fatherCar);
myCar.brand = 'Subaru';
myCar.transmission = 'auto';
console.log(Object.getPrototypeOf(myCar));
//console.log(fatherCar);
//console.log(myCar.__proto__);






/*
function solve(input) {
	
	let funcResutl = (function () {
		let obj = {};
		
		function create(arr) {
			
			if(arr.length > 2){
				obj[arr[0]] = Object.create(obj[arr[2]]);
			}else{
				obj[arr[0]] = {};
			}
		}
		function set(arr) {
			for (let ob in obj) {
				if(arr[0] == ob){
					obj[ob][arr[1]] = arr[2];
				}
			}
		}
		function print(arr) {
			let list = [];
			for (let ob in obj[arr[0]]) {
				let temp = ob + ':' + obj[arr[0]][ob];
				//ob взима color а obj[arr[0]][ob] взима value(red)
				list.push(temp)
			}
			console.log(list.join(', '));
		}
		return {create, set, print}
	}());
	for (let arrElement of input) {
		let args = arrElement.split(' ');
		let command = args.shift();
		funcResutl[command](args);
	}
}
*/