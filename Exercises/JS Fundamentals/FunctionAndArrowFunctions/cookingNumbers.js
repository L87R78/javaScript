function cookingNumbers(arr) {
    let pattern = /(\w)+/gi;
    let newArr = arr.match(pattern);
    let num = Number(newArr.shift());

    for (let command of newArr) {
        switch(command){
            case 'chop': num = num / 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num = num + 1; break;
            case 'bake':  num = num * 3; break;
            case 'fillet': num = (num / 100) * 80; break;
        }
        console.log(num)
    }
}
//cookingNumbers('[9, ‘dice’’, spice, chop, bake, fillet]');