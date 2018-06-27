//IIFE

(function solve(arr) {
	let sum = 0;
	for (let number of arr) {
		sum += number;
	}
	console.log(sum);
	
}([2, 4, 5]));		// IIFE - изпълняват се без да замърсяват


//slosure

(function solve(arr) {
	let sum = 0;
	for (let number of arr) {
		sum += number;
	}
	console.log(sum);
	
}([2, 4, 5]));


let revModule = (function () {
	let count = 0; // private
	
	function change(amount) {
		return count += amount;
	}                                           //функциите се дефинират в кложера
	function increase(num) {
		return change(num);
	}
	
	function decrease(num) {
		return change(-num);
	}
	
	function value() {
		return count;
	}
	
	return {increase, decrease, value};
})();


// -- module pattern

let module = (function () {
	let count = 0; // private
	return {
		increase: (num) => count += num,                // а тук се дефинират о обекта, който връщаме
		decrease: (num) => count -= num,
		value: () => count,
	};
})();


