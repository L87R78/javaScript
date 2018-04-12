function radioCrystals(arr) {
    let targetSize = arr[0];

    let cut = (num) => num / 4;
    let lap = (num) => num * 0.8;
    let grind = (num) => num - 20;
    let etch = (num) => num - 2;
    let transportAndWash = (num) => {
        console.log("Transporting and washing")
        return Math.floor(num);
    }
    let xray = (num) => {
        console.log('X-ray x1')
        return ++num
    };

    for (let i = 1; i < arr.length; i++) {
       let microns = arr[i];
       console.log(`Processing chunk ${arr[i]} microns`)
        microns = executeOperations(targetSize, microns, 'Cut', cut)
        microns = executeOperations(targetSize, microns, 'Lap', lap)
        microns = executeOperations(targetSize, microns, 'Grind', grind)
        microns = executeOperations(targetSize, microns, 'Etch', etch)

        if(microns + 1 == targetSize){
            microns = xray(microns)
        }
        console.log(`Finished crystal ${microns} microns`);
    }
    function executeOperations(targetSize, size, operationName, operation) {
        let count = 0;

        while (operation(size) >= targetSize || targetSize - operation(size) === 1){

            size = operation(size)
            count++
        }
        if(count > 0){
            console.log(`${operationName} x${count}`)
           size = transportAndWash(size)
        }

        return size

    }
}
//radioCrystals([1375, 50000])