function cards(card, suit) {
	let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	let validSuits = {
		S: '\u2660',
		H: '\u2665',
		D: '\u2666',
		C: '\u2663'
	};
	if(validCards.indexOf(card) < 0 || !validSuits.hasOwnProperty(suit)){
		throw new Error('Invalid card or suit')
	}
	return{
		toString: function () {
			//return card + validSuits[suit];
			
			//or this:
			let list = [];
			for(key of validCards) {
				if(key === card){
					list.push(key);
					break;
				}
			}
			let count = 0;
			let value;
			let isCheckSuits = false;
			for(key in validSuits) {
				if(key === suit){
					value = Object.values(validSuits);
					isCheckSuits = true;
					break;
				}
				count++;
			}
			if(list.length > 0 && isCheckSuits === true){
				return `${list[0]}${value[count]}`
			}
		}
	}
}
//console.log('' + cards('A', 'S'));
//console.log('' + cards('10', 'D'));
//console.log('' + cards('4', 'V'));