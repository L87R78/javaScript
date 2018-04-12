
function insideVolume(input) {
    for (let i = 0; i < arguments.length; i+=3) {

        let x = input[i];
        let y = input[i+1];
        let z = input[i+2];

        if (inVolume(x, y, z)){
            console.log('inside')
        }else{
            console.log('outside')
        }
    }


}
insideVolume([8, 20, 22]);



