function distance3D(arr) {

    let x0 = arr[0];
    let y0 = arr[1];
    let z0 = arr[2];
    let x1 = arr[3];
    let y1 = arr[4];
    let z1 = arr[5];

    let deltaX = x1 - x0;
    let deltaY = y1 - y0;
    let deltaZ = z1 - z0;

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    console.log(distance)
}
//distance3D([1, 1, 0, 5, 4, 0]);