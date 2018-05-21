/*
let rect = {
    width: 10,
    height: 4,
    grow: function (w, h) {
        this.width += w;
        this.height += h;
    },
    print: function () {
        console.log(`[${this.width} x ${this.height}]`)
    }
};
rect.grow(2, 3);
rect.print(); // [12 x 7]
*/

//...............................................................................






/*
let obj = {
    toString: function () {
        return 'Hello'
    }
};
console.log(obj.toString());
// or
console.log(obj + '');
*/

//.................................................................................







/*
let rect = {
    width: 10,
    height: 4,
   toString: function () {
       return   `rect[${this.width} x ${this.height}]`;
   }
};
console.log(rect);
console.log('' + rect); // rect[10 x 4]
*/

//.................................................................................


// -- "Revealing Module" Pattern (with Closure)

let revModule = (function() {
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

    return { increase, decrease, value };
})();


  // -- module pattern

let module = (function() {
    let count = 0; // private
    return {
        increase: (num) => count += num,                // а тук се дефинират о обекта, който връщаме
        decrease: (num) => count -= num,
        value: () => count,
    };
})();











