/*
(function () {
    Array.prototype.last = function () {
        return this[this.length-1]
    };
    Array.prototype.skip = function (n) {
        return this.filter((e,i)=>i>Number(n)-1)
    };
    Array.prototype.take = function (n) {
        return this.filter((e,i)=>i<Number(n))
    };
    Array.prototype.sum = function () {
        return this.reduce((a,b)=>a+b)
    };
    Array.prototype.average = function () {
        return this.reduce((a,b)=>a+b)/this.length
    }
})();
myArr = [1,1,1,2,2,3];
console.log(myArr.sum());
*/


(function () {
	Array.prototype.last = function () {
		return this.length
	};
	Array.prototype.skip = function (n) {
		let result = [];
		for (let i = n; i < this.length; i++) {
			let myArrElement = this[i];
			result.push(myArrElement);
		}
		return result
		//or this
		//return this.filter((e,i)=>i>Number(n)-1)
	};
	Array.prototype.take = function (n) {
		let result = [];
		for (let i = 0; i < n; i++) {
			result.push(this[i]);
		}
		return result
	};
	Array.prototype.sum = function () {
		let sum = 0;
		for (let i = 0; i < this.length; i++) {
			sum += this[i];
		}
		return sum
	};
	Array.prototype.average = function () {
		let sumTemp = 0;
		for (var i = 0 ; i < this.length; i++) {
			sumTemp += this[i];
		}
		let result = sumTemp/this.length;
		return result
	}
}());
let myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.average());

