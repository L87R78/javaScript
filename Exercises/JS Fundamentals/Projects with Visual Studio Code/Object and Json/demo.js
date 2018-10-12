/*
let person = {
    name: 'lubo',
    age: 32
};

let value = Object.values(person);
//console.log(value);
*/
//------------------------------------------------------------------------
            
/*
let city1 = {
    name: "a",
    population: 10000000
}
let city2 = {
    name: "Sliven",
    population: 1222
}
let city3 = {
    name: "Pleven",
    population: 23435
}
let city4 = {
    name: "Vza",
    population: 0
}
let sorted = [city1, city2, city3, city4];

let sortedName = sorted.sort((a, b) =>{
    return a.name.length - b.name.length;
})

//console.log(sortedName)
let sortedPopulation = sortedName.sort((a, b) => {
     return a.population - b.population  
})

//console.log(sortedPopulation)
*/

//-------------------------------------------------------------------------------------------------

let city1 = {
    name: "Sofiaaaa",
    population: 10000000
}
let city2 = {
    name: "Sliven",
    population: 1222
}
let city3 = {
    name: "Pleven",
    population: 23435
}
let city4 = {
    name: "Vzac",
    population: 2
}



let country1 = {
    city1,
    city2
}
let country2 = {
    city3,
    city4
}
let test = [country1, country2]
            .map((country) => {
                let totalPopulation =  Object.keys(country)
                    .map((key) =>{
                        return country[key].population; 
                    })
                   let c = totalPopulation
                    .reduce((acc, cur) => {
                        return acc + cur;
                    }, 0)
                return {
                    country,
                    totalPopulation
                }
            })
            .sort((a, b) => {
                return  a.population - b.population
            })
            .map((countryObj) => {
               return country = countryObj.country;
            });
  

console.log(test)


