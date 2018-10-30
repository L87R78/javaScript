
let result = (function () {
	const Suits = {
		CLUBS: "\u2663",
		DIAMONDS: "\u2666",
		HEARTS: "\u2665",
		SPADES: "\u2660",
	};
	const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	class Card {
		constructor(face, suit) {
			this.face = face;
			this.suit = suit;
			//Object.freeze(this) не може да се добавя и сменя ни
			//Object.suit(this) // не може да сменя имената и боите, но може да добавя
		}

		get face(){
			return this._face
		}
		get suit(){
			return this._suit
		}
		set face(face) {
			if (Faces.indexOf(face) < 0) {
				throw new Error('Invalid face!')
			}
			this._face = face
		}
		set suit(suit) {
			if (Object.values(Suits).indexOf(suit) < 0) { //проверка дали има такава боя
				throw new Error('Invalid suit!')
			}
			this._suit = suit
		}

		toString(){
			return this._face + this._suit
		}
	}
	return {Suits, Card}
}());

let Card = result.Card;
let Suits = result.Suits;

let c1 = new Card('4', Suits.HEARTS);
console.log(c1.toString());



					//solve 02






