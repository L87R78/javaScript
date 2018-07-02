function deckCards(arr) {
	function createCard(card, suit) {
		let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		let validSuits = {
			S: '\u2660',
			H: '\u2665',
			D: '\u2666',
			C: '\u2663'
		};
		if (validCards.indexOf(card) < 0 || !validSuits.hasOwnProperty(suit)) {
			throw new Error('Invalid card or suit')
		}
		return {
			toString: function () {
				return card + validSuits[suit];
			}
		}
	}
	
	for (let i = 0; i < arr.length; i++) {
		let end = arr[i].length - 1;
		let card = arr[i].substring(0, end);
		let suit = arr[i][end];
		try {
			arr[i] = createCard(card, suit)
		} catch(error){
			console.log('Invalid card: ' + arr[i]);
			return;
		}
	}
	console.log(arr.join(', '))
}
deckCards(['1S', '10D', 'KH', '1C']);
//deckCards(['AS', '10D', 'KH', '2C']);