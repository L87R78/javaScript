function matchMultiplication(input){
    let pattern = /((\-|\+)?[0-9]+)\s*(\*)\s*((\-|\+)?[0-9]+\.[0-9]+)/gi;

    let result = pattern.exec(input);
    let copyInput = input;

    while(result !== null){
        let copy = result[0];
        let firstNum = Number(result[1]);
        let lastNum = Number(result[4])
        let sum = firstNum * lastNum;
        
        copyInput = copyInput.replace(copy, sum)
        result = pattern.exec(input);
    }
    console.log(copyInput)
}
matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');