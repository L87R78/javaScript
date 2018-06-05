function findName(input) {

    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let m = regex.exec(input);

    let list = [];

    while (m){
        list.push(m[1]);
        m = regex.exec(input);
    }
    console.log(list.join(','))
}
findName('The _id and _age variables are both integers.');