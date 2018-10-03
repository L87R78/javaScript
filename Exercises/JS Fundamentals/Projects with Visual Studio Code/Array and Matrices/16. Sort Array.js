function sortString(arr){

    arr.sort(function (a, b) {
        var textA = a.toUpperCase();
        var textB = b.toUpperCase();
      
        return textA.localeCompare(textB);
      });

    let result = arr.sort((x, y) => x.length - y.length);

    result.forEach(element => {
        console.log(element)
    });
}
//sortString(['Isacc', //
//'Theodor', 
//'Jack', 
//'Harrison', 
//'George']
//)

