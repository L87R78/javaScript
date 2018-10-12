/*
function autoEngineeringCompany(arr){

    let map = new Map();
    for (let str of arr) {
        let [carBr, carMod, proCars] = str.split('|');
       
        let carBrand = carBr.trim();
        let carModel = carMod.trim();
        let producedCars = Number(proCars);
     
        if(!map.has(carBrand)){
            map.set(carBrand, new Map())
        }

        let oldValue = map.get(carBrand).get(carModel);

        if(oldValue){
            map.get(carBrand).set(carModel,producedCars+oldValue)
        }
        else{

            map.get(carBrand).set(carModel,producedCars)
        }
    }

    for (let [car, brandAndProduct] of map) {
        console.log(`${car}`)
    
        for (let [key, value] of brandAndProduct) {
            console.log(`###${key} -> ${value}`)
        } 
    }
}
autoEngineeringCompany(['Mini | Clubman | 20000',
'Mini | Convertible | 1000',
'Mini | Clubman | 1000',
'Mercedes-Benz | 60PS | 3000',
'Hyunday | Elantra GT | 20000',
'Mini | Countryman | 100',
'Mercedes-Benz | W210 | 100',
'Mercedes-Benz | W163 | 200']);
*/



function solve(arr){

    let map = new Map();

    for (let str of arr) {
       let [car, model, price] = str.split(' | ');

        if(!map.has(car)){
           map.set(car, new Map());
        }

        if(map.get(car).get(model)){ //влиза само ако има еднакакъв Car и model
            map.get(car).set(model, map.get(car).get(model) + Number(price)); //сумира price
            //map.get(car).set(model, Number(3)) //така, ако има на входа същата car и model записва последния вход
        }
        else{
            map.get(car).set(model, Number(price)); 
        }
    }
    let sortedCar = Array.from(map.keys())
            .sort() // sort ASCII може и reverse()
            //.sort((a, b) =>  map.get(b) < map.get(a))
            //.sort((a, b) => map.get(a).size - map.get(b).size); //sort on length

    for (let car of sortedCar) {
        console.log(`${car}`);
        
        let sortedModel = Array.from(map.get(car).keys()).sort();
        let sortedPrice = Array.from(map.get(car).values()).sort();
        
        for (let a = 0; a < sortedModel.length; a++) {

            for (let b = a; b < sortedPrice.length; b++) {
                    console.log(` ${sortedModel[a]} -> ${sortedPrice[b]}`)
                    break;

            } 
           
        }
    }
}
solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Cici | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Bmw | elantra GT | 204343',
    'Bmw | aa GT | 3234343434323',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Bmw | baa GT | 20',
    'Mercedes-Benz | R16 | 200']);