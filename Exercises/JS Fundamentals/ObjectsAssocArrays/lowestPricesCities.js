function lowestPricesCities(arr) {
    let result = {}
    for (let str of arr) {
        let [town, product, price] = str.split(' | ')
        price = Number(price)
        if (!result[product]) {
            result[product] = {}
        }
        //if(!result[product][town]){
            result[product][town] = price
        //}

    }
    print(result)

    function print(products) {
        for (let product in products) {
            let output = product
            for (let town in products[product]) {
                output +=  ` -> ${products[product][town]} (${town})`
                break
            }
            console.log(output)
        }
    }
function sort(result) {
        for (let town of result) {
            let element = result[town]
            Object.keys(town).sort((a, b) => {
                return element[a] - element[b]

            })
        }
    }
}
/*
lowestPricesCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])
*/