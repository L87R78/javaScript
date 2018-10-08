function captureNumbers(arr){
    let pattern = /[0-9]+/gi;
    let arrResult = [];

    for (let el of arr) {
        let test = el.match(pattern);

        if(test !== null){
            for (let i = 0; i < test.length; i++) {
                arrResult.push(test[i])
            } 
        }  
    }
    console.log(arrResult.join(' '));
}
captureNumbers(['The300', 
'What is that?', 
'I think it’s the 3rd movie.', 
'Lets watch it at 22:45']);