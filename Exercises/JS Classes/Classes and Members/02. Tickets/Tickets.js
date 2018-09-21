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



//-------------------------------------------------------------------------------------------------------------------------
/*
function Tickets(arr, destination) {
	class Tickets {
		constructor(destination, price, status){
			this.destination = destination;
			this.price = Number(price);
			this.status = status;
		}
	}
	let resultArr = [];
	for (let el of arr) {
		let[destination, price, status] = el.split('|');
		let tickets = new Tickets(destination, price, status);
		resultArr.push(tickets)
	}
	if(destination === 'destination'){
		var newArray = resultArr.sort(function(first, second) {
			var a = first.destination;
			var b = second.destination;
			
			if(a > b) {
				return 1;
			} else if(a < b) {
				return -1;
			} else {
				return 0;
			}
		});
		console.log(newArray);
	}
	else if(destination === 'price'){
		var newArray = resultArr.sort(function(first, second) {
			var a = first.price;
			var b = second.price;
			
			if(a > b) {
				return 1;
			} else if(a < b) {
				return -1;
			} else {
				return 0;
			}
		});
		
	}else{
		var newArray = resultArr.sort(function(first, second) {
			var a = first.status;
			var b = second.status;
			
			if(a > b) {
				return 1;
			} else if(a < b) {
				return -1;
			} else {
				return 0;
			}
		});
	}
	return resultArr
}
Tickets(['Philadelphia|94.20|available',
	'New York City|95.99|available',
	'New York City|95.99|sold',
	'Boston|126.20|departed'],
	'status');
 */

 

