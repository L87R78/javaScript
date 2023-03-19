                                    //solution with Revealing Module Pattern
/*
function solve(input) {
    let commandExecutor = (function () {
        let objResult = {};
        function create(arr) {
            //console.log(arr);
            if(arr.length > 2){
                objResult[arr[0]] = Object.create(objResult[arr[2]]); // наследяване на съществуващ обект
            }else{
                objResult[arr[0]] = {};  //създаване на празен обект
            }
        }
        function set(arr) {
            let name = arr[0];
            let key = arr[1];
            let value = arr[2];
            objResult[name][key] = value;
        }
        function print(arr) {
            let listResult = [];
            let obj = objResult[arr[0]];
            for (let key in obj) {
                //let temp = key;
                //let temp2 = obj[key];
                //console.log(temp)
                //console.log(temp2)
                listResult.push(key + ':' + obj[key])
            }
            console.log(listResult.join(', '))
        }
        return {create, set, print}
    }());
    for (let str of input) {
        let args = str.split(' ');
        let command = args.shift();
        commandExecutor[command](args)
    }
}

solve(['create Subaru',
    'create BMW inherit Subaru',
    'set Subaru color red',
    'set BMW model new',
    'print Subaru',
    'print BMW']
);
*/



                                            //solution with module pattern
/*
function processCommands(commands) {
    let map = new Map();
    let cmdExecutor = {
        create: function ([objName, inherits, parent]) {
            parent = parent ? map.get(parent) : null;
            let newObj = Object.create(parent);
            map.set(objName, newObj);
            return newObj;
        },
        set: function ([objName, key, value]) {
            let obj = map.get(objName);
            obj[key] = value;
        },
        print: function ([objName]) {
            let obj = map.get(objName), objects = [];
            for (let key in obj) {
                objects.push(`${key}:${obj[key]}`);
            }
            console.log(objects.join(', '));

        }
    };
    for (let command of commands) {
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        cmdExecutor[action](commandParameters);
    }
}
processCommands(['create Subaru',
    'create BMW inherit Subaru',
    'set Subaru color red',
    'set BMW model new',
    'print Subaru',
    'print BMW']
);
*/


function solve(input) {

    let funcResutl = (function () {
        let obj = {};

        function create(arr) {

            if(arr.length > 2){
                obj[arr[0]] = Object.create(obj[arr[2]]);
            }else{
                obj[arr[0]] = {};
            }
        }
        function set(arr) {
            for (let ob in obj) {
               if(arr[0] == ob){
                   obj[ob][arr[1]] = arr[2];
               }
            }
        }
        function print(arr) {
            let list = [];
            for (let ob in obj[arr[0]]) {
            let temp = ob + ':' + obj[arr[0]][ob];
                list.push(temp)
            }
            console.log(list.join(', '));
        }

        return {create, set, print}
    }());
    for (let arrElement of input) {
        let args = arrElement.split(' ');
        let command = args.shift();
        funcResutl[command](args);
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
