function storeCataloge(arr){

    let map = new Map();

    for (let item of arr) {
        let split = item.split(':');
        let name = split[0].trim();
        let price = split[1].trim();

        let firstLetter = name.substr(0, 1);

        if(!map.has(firstLetter)){
            map.set(firstLetter, new Map());
        }
        map.get(firstLetter).set(name, price);
    }
    firstArr = Array.from(map).sort();
    for (let [firstLetter, item] of firstArr) {
        console.log(firstLetter[0]);

        secondArr=Array.from(item).sort();
        for (let arr of secondArr) {
            console.log(` ${arr[0]}: ${arr[1]}`)
        }
    }
}
storeCataloge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);