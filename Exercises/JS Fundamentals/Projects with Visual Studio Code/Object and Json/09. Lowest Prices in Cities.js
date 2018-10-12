/*
function solve(arr){
    let dataObj = arr
            .map((item) => {
                let townInfo = item.split(" | ");
 
                return {
                    city: townInfo[0],
                    product: townInfo[1],
                    price: townInfo[2]
                };
            });
    let result = dataObj
        .reduce((acc ,cur) => {
      
            if(!acc[cur.product]){
                acc[cur.product] = cur;
                return acc;
            }

            if(Number(acc[cur.product].price) > Number(cur.price)){
                acc[cur.product] = cur
            }
            return acc;
        }, {});

    Object.keys(result)
            .forEach((item) => {
                //Sample Product -> 1000 (Sample Town)
                console.log(`${item} -> ${result[item].price} (${result[item].city})`)
            })
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);
*/

function findLowestPricedProducts(input) {
    let products = new Map;
    for (let priceList of input) {
        let [town, product, price] = priceList.split(/\s+\|\s+/g);
        if (!products.has(product))
            products.set(product, new Map);
        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';
        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}
findLowestPricedProducts(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);






        



