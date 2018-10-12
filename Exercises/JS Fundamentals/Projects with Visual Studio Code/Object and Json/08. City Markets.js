function solve(input){
    let map = new Map();
    for (let str of input) {
        let [town, product, price] = str.split(/\s+->\s+/g);
        let [num1, num2] = price.split(/\s+:\s+/g)
        let sum = Number(num1) * Number(num2);

        if(!map.has(town)){
            map.set(town, new Map())
        }
        map.get(town).set(product, sum);
    }

    for (let [town, product] of map) {
        console.log(`Town - ${town}`)

        for (let [key, value] of product) {
            console.log(`$$$${key} : ${value}`)
        }
        
    }
}
solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'])