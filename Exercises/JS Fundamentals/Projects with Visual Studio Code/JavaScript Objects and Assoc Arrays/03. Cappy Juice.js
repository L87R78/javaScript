function cappyQuantity(arr){
    let objQuantity = {};
    let objBottles = {};

    for (let str of arr) {
        let split = str.split(" => ");
        let cappy = split[0];
        let quantity = Number(split[1]);

        if(!objQuantity.hasOwnProperty(cappy)){
            objQuantity[cappy] = 0;
        }
        objQuantity[cappy] += quantity;

        if(objQuantity[cappy] >= 1000){ 
            objBottles[cappy] = parseInt(objQuantity[cappy] / 1000); 
        }
    }
  
    for (let key of Object.keys(objBottles)) {
        console.log(`${key} => ${objBottles[key]}`) 
    }
}
cappyQuantity(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);