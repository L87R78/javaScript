/*
function Person(name, age) {
	this.name = name
	this.age = age
}
let p = new Person('lyubo', 24)
//console.log(p);
*/

/*
class rect {
	constructor(width, height, color) {
		this.width = Number(width);
		this.height = Number(height);
		this.color = color;
	}
	
	calcArea(){
		return this.width * this.height
	}
}
let newRect = new rect(2, 3, 'blue');
newRect.func = function(){
	return 'sasasa'
};
//console.log(newRect.func());
*/

/*
function createPerson() {
	
	return [
		new Person('Lyubo', 'Atanasov', '31', 'lubo@abv.bg'),
		new Person('Lyubo', 'Atanasov', 'lubo@abv.bg'),
		new Person('lyubo', '31', 'lubo@abv.bg'),
		new Person('lyubo',)
	]

}
createPerson().forEach(a => console.log(a.toString()));
*/

/*
class Circle{
	constructor(radius){
		this.radius = radius;
	}
	get diameter(){
		return this.radius * 2;
	}
	get area(){
		return Math.PI * this.radius * this.radius;
	}
	
	set diameter(diameter){
		 this.radius = diameter / 2;
	}
}
//let c = new Circle(2);
//console.log(`Radius: ${c.radius}`);
//console.log(`Diameter: ${c.diameter}`);
//console.log(`Area: ${c.area}`);
//c.diameter = 1.6;
//console.log(`Radius: ${c.radius}`);
//console.log(`Diameter: ${c.diameter}`);
//console.log(`Area: ${c.area}`);
*/

/*
class Point{
		constructor(x, y){
			this.x = x;
			this.y = y;
		}
		static distance(a, b){
			let dx = a.x - b.x;
			let dy = a.y - b.y;
			
			return Math.hypot(dx, dy);
		}
}
//let p1 = new Point(5, 5);
//let p2 = new Point(9, 8);
//console.log(Point.distance(p1, p2));
*/



/*
let result = (function () {
	const Suits = {
		CLUBS: "\u2663",
		DIAMONDS: "\u2666",
		HEARTS: "\u2665",
		SPADES: "\u2660",
	};
	const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
	
	class Card {
		constructor(face, suit) {
			this.face = face;
			this.suit = suit;
		}
		get face(){
			return this._face
		}
		get suit() {
			return this._suit
		}
		
		set face(f) {
			if (Faces.indexOf(f) < 0) {
				throw new Error('Invalid face!')
			}
			this._face = f;
		}
		
		set suit(s) {
			if (Object.values(s).indexOf(s) < 0) {
				throw new Error('Invalid suit!')
			}
			this._suit = s;
		}
		
		toString() {
			return this._face + this._suit;
		}
	}
	
	return {Suits, Card}
}());

let Cards = result.Card;
let Suits = result.Suits;

let c = new Cards('5', Suits.DIAMONDS);
//console.log(c.toString());

Card._face = 'A';
Card._suit = Suits.DIAMONDS;
let c2 = new Cards('9', Suits.HEARTS);
console.log(c2.toString());
*/







