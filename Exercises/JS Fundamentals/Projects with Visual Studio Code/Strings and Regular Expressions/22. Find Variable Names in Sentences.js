function findNames(str){
    let pattern1 = /_[A-Za-z0-9]+/gi;
    let pattern2 = /[A-Za-z0-9]+/gi;

    let result = str.match(pattern1);
    result = result.toString();
    result = result.match(pattern2);
    console.log(result.join());
}
findNames('The _id and _age variables are both integers.');