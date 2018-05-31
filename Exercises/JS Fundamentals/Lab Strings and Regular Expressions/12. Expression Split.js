function expressionSplit(text) {
    let regex = /[.,;()\s]+/;
    text.split(regex).forEach(s => console.log(s))

}
expressionSplit('let sum = 4 * 4,b = "wow";');