/*
function solve(obj) {
    let powerEngine = Number(obj.power);
    let powerVolume = 0;
    if(powerEngine <= 90){
        obj.power = 90;
        powerVolume = 1800;
    }
    else if(powerEngine <= 120){
        obj.power = 120;
        powerVolume = 2400;
    }
    else {
        powerVolume = 3500;
    }

    let resultWheels = Number(obj.wheelsize);
    resultWheels = Math.floor(resultWheels);

    if(resultWheels %2 === 0){
        resultWheels = resultWheels-1
    }

   let testObj = {
       model: obj.model,
       engine: {
           power: obj.power,
           volume: powerVolume
       },
       carriage: {
           type: obj.carriage,
           color: obj.color
       },
       wheels:[resultWheels,resultWheels,resultWheels,resultWheels]
   };
   return testObj
}
solve({ model: 'VW Golf II',
    power: 98,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 });
*/ 
    
    
function solution (requirements) {
    let model = requirements.model;
    let color = requirements.color;
    let power = requirements.power;
    let carriage = requirements.carriage;
    let wheels = requirements.wheelsize;
    let finalCar = {};
    finalCar['model'] = model;
    finalCar['engine'] = {};
    if(power<=90){
        finalCar['engine']['power']=90;
        finalCar['engine']['volume'] = 1800;
    }
    else if(power<=120){
        finalCar['engine']['power']=120;
        finalCar['engine']['volume'] = 2400;
    }
    else{
        finalCar['engine']['power']=200;
        finalCar['engine']['volume'] = 3500;
    }
    finalCar['carriage'] = {}
    finalCar['carriage']['type'] = carriage;
    finalCar['carriage']['color'] = color;
    wheels = Math.floor(wheels);
    if(wheels%2===0){
        wheels = wheels-1
    }
    finalCar['wheels'] =[wheels,wheels,wheels,wheels];
    console.log(finalCar);
}
solution({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
)
