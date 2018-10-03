/*
function cookingNums(arr) {
    let num = Number(arr.shift());

    for (let operation of arr) {
        if(operation === 'chop'){
            num = num / 2;
            console.log(num)
        } else if (operation === 'dice'){
            num = Math.sqrt(num);
            console.log(num)
            
        } else if (operation === 'spice') {
             num += 1;
             console.log(num)

        } else if (operation === 'bake') {
            num *= 3;
            console.log(num)

        } else if (operation === 'fillet') {
            num = num - (num * .20);
            console.log(num)
        }
    }
}
cookingNums(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
*/


