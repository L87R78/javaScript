function letterOccurrencesString(string, letter) {

    let element = letter;
    let count = 0;
    let temp = string.indexOf(element);

    while (temp != -1){
        count++;
        temp = string.indexOf(element, temp + 1);
    }
    console.log(count);
}
//letterOccurrencesString('hello', 'l');