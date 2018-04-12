function AddRemoveElements(arr) {
        let resultArr = []
    //let test = arr.split(/\W+\s*/)
    //console.log(test)
    let count = 1;
       for(let comand of arr){
           if(comand == 'add'){
               resultArr.push(count)
               count++;
           }
           else if(comand == 'remove'){
               resultArr.pop()
               count++;
           }
       }
       if(resultArr.length == 0){
           console.log("Empty")
           return
       }
       console.log(resultArr.join(' ' + '\n'))
}
AddRemoveElements(['add',
    'add',
    'remove',
    'add']
)