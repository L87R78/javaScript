function delimeter(text, delimeter){
    let str = text;
    let deli = delimeter;

    let arr = str.split(deli)
    console.log(arr.join('\n'));
}