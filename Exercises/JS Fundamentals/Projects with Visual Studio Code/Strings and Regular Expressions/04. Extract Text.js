function exractText(input){
    
    let pattern = /((?<!\()\()([^()]*)(\)(?!\)))/gi;
    //let pattern = /(?<=\().+?(?=\))/gi;
    let execResult = pattern.exec(input);
    let arr = [];
    
    while (execResult != null) {
        arr.push(execResult[2]);
        execResult = pattern.exec(input);
    }
    console.log(arr.join(', '))
}
//exractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');