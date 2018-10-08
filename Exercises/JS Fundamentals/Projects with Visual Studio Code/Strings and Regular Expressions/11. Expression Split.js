function expressionSplit(input){
        let regex = /[.,;()\s]+/;
        input.split(regex).forEach(s => console.log(s))
}
//expressionSplit('let sum = 4 * 4,b = "wow";');