/*
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(4).substr(-3, 2);
    if (symbolFirst){
        return symbol + ' ' + result;
    }
    else
        return result + ' ' + symbol;
}

let dollarFormatter = result(currencyFormatter)
console.log(dollarFormatter(2.993932))
console.log(dollarFormatter(1234))
console.log(dollarFormatter(2.654321))
*/

function result(func) {
    return function (value) {
        return func(',', '$', true, value)
    }
}

/*
let num = 50.12345
let result = num.toFixed(6)
console.log(result)
*/