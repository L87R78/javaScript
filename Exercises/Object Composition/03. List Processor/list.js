/*
//This is Revealing Module Pattern
function solve(arr) {
    let commandExecutor = (function () {
        let array = [];
        function add(str) {
            array.push(str)
        }
        function remove(str) {
            array = array.filter(w => w !== str) // тук му казваме, ако търсената дума я има вътре в array аь я изтрие
        }
        function print() {
            console.log(array.join(','))
        }
        return {add, remove, print}
    }());

    for (let str of arr) {
        let [comand, value] =  str.split(' ');
        commandExecutor[comand](value)

    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
*/











function solve(arr) {
    let funcResutl = (function () {
        let list = [];
        function add(arrElement) {
            list.push(arrElement)
        }
        function remove(arrElement) {
            for (let i= list.length-1; i>=0; i--) {
                if (list[i] === arrElement) {
                    list.splice(i, 1);
                }
            }
        }
        function print(arrElement) {
            console.log(list.join(','));
        }

        return {add, remove, print}
    }());

    for (let arrElement of arr) {
        let [command, value] = arrElement.split(' ');
        funcResutl[command](value);
    }
}

solve(['add pesho','add haha', 'add gosho','add Lubo', 'add pesho', 'remove pesho','print']);
















