function delimeter(arr) {

    let lastElement = arr.pop();
    let resultArr = "";

    for (let word of arr){
        resultArr += word + lastElement;
    }
    let temp = resultArr.lastIndexOf(lastElement);
    resultArr = resultArr.substring(0, temp);
    console.log(resultArr);

}
delimeter(`[One,
Two,
Three,
Four,
Five,
-]`)