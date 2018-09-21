function solve(arr) {

    let obj1 = {
        'speed': arr[0],
        'distancePassed': 0
    };
    let obj2 = {
        'speed': arr[1],
        'distancePassed': 0
    };
    let timeInHours = arr[2] / 60 / 60;

    obj1.distancePassed = obj1.speed * timeInHours;
    obj2.distancePassed = obj2.speed * timeInHours;

    let distance = Math.abs(obj1.distancePassed - obj2.distancePassed) * 1000;

    console.log(distance);
    
}
//solve([0, 60, 3600])