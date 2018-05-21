/*
let add = (function () {
    let currentSum = 0;
    return function add (number) {
        currentSum+= Number(number);

        add.toString = function () {
            return currentSum
        };
        return add

    }
})();
console.log(Number(add(6)(34)(4)));
*/
let result = (function () {
    let sum = 0;

    function increase(num) {
        sum += num;
        return increase
    }

    increase.toString = function () {
        return sum
    };
    /*
    increase.valueOf = function () {
        return sum
    };
    */
    return increase
})();
console.log(result(1)(6)(-3) + '');
