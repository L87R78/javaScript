function distanceOverTime(arr) {

    let v1 = arr[0];
    let v2 = arr[1];
    let time = arr[2];

    let result = Math.abs(v1 - v2);
    console.log(result)
}
distanceOverTime([0, 60, 3600]);