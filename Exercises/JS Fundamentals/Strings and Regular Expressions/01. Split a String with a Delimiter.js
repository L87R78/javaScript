function delimiter(text, delimiter) {
    //console.log(text);
    let test = delimiter;
    //console.log(test);
    let result = text.split(test);

    for (let textElement of result) {
        console.log(textElement)
    }
}
delimiter('One-Two-Three-Four-Five \n', '-');