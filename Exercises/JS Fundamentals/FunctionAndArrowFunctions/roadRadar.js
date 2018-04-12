function roadRadar(arr) {

    let array = /(\w)+/gi;
    let test = arr.match(array);

    let limit = getLimit(test[1]);
    let speed = Number(test[0]);
    let infraction = getInfraction(speed, limit);
    if(infraction <= 0){
        return;
    }
    else if(infraction <= 20){
        console.log("speeding");
    }
    else if(infraction <= 40){
        console.log("excessive speeding")
    }else{
        console.log("reckless driving")
    }

    function getLimit(zone) {
        switch (zone){

            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function getInfraction(speed, limit){
        let overSpeed = speed - limit;
        if (overSpeed <= 0){
            return overSpeed;
        }
        return overSpeed;

    }
}
//roadRadar('[40, city]');