function radar(arr) {
    let speed = arr[0];
    let place = arr[1];

    if(place === 'city'){
        if(speed <= 50){

        }else{
            let km = 50;
            return resultSpeed(km)
        }

    } else if (place === 'residential'){
        if(speed <= 20){

        }else{
            let km = 20;
            return resultSpeed(km)
        }

    } else if (place === 'interstate') {
         if (speed <= 90) {

         } else {
             let km = 90;
             return resultSpeed(km)
         }

    } else if (place === 'motorway') {
         if (speed <= 130) {

         } else {
             let km = 130;
             return resultSpeed(km)
         }
    }
    function resultSpeed(km){
        let sum = speed - km;
        if(sum <= 20){
            console.log('speeding')
        }else if(sum <= 40){
            console.log('excessive speeding')
        }else{
            console.log('reckless driving');
        }
    }
}
//radar([21, 'residential']);