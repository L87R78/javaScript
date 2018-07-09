function solve(arr, criteria) {
	class Tickets{
		constructor(destination, price, status) {
			this.destination = destination;
			this.price = Number(price);
			this.status = status;
			
			//console.log(this.price);
		}
	}
	let result = [];
	for(let el of arr){
		let [destination, price, status] = el.split('|');
		let ticket = new Tickets(destination, price, status);
		result.push(ticket);
		console.log(ticket);
	}
	return result.sort((a, b) => a[criteria] > b[criteria])
}

solve(['Philadelphia|94.20|available',
		'New York City|95.99|available',
		'New York City|95.99|sold',
		'Boston|126.20|departed'],
	'destination');

