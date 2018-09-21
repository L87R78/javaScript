class Rat{
	constructor(name){
		this.name = name;
		this.unitedRats = [];
		
	}
	unite(otherRat){
		if(otherRat instanceof  Rat){
			this.unitedRats.push(otherRat);
		}
	}
	getRats(){
		return this.unitedRats
	}
	toString(){
		let result = this.name + '\n';
		
		for (let rat of this.unitedRats) {
			result += `##${rat.name}\n`;
		}
		return result.trim();
	}}

//let test = new Rat("Pesho");
//console.log(test.toString()); //Pesho

//console.log(test.getRats()); //[]

//test.unite(new Rat("Gosho"));
//test.unite(new Rat("Sasho"));
//console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

//console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
//--------------------------------------------------------------------------------------------------------------------------------


/*
class Rat{
	constructor(name){
		this.name = name;
		this.arr = [];
	}
	
	unite(anotherRat){
		if(anotherRat instanceof Rat){
			this.arr.push(anotherRat)
		}
	}
	
	getRats(){
		return this.arr
	}
	
	toString(){
		console.log(this.name);
		for (let i = 0; i < this.arr.length; i++) {
			let resultArr = this.arr[i].name;
			console.log('##' + resultArr);
		}
	}
}
let test = new Rat("Pesho");
console.log(test.toString()); //Pesho
console.log(test.getRats()); //[]
test.unite(new Rat('lyubo'));
test.unite(new Rat('Ivan'));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]
console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
*/

