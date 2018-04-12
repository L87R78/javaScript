function RotateArray(arr) {
        let lastNumRotate = arr.pop();

    for (let i = 0; i < lastNumRotate && lastNumRotate >= arr.length; i++) {
        let tempLastNum = arr.pop();
        //let tempFirstNum = arr.shift();

        //arr.push(tempFirstNum);
        arr.unshift(tempLastNum);
    }
    console.log(arr.join(' '))
}
//RotateArray(['1', '2', '3', '4', '2'])