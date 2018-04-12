function SortArrayCriteria(arr) {
    arr = arr.sort((a,b) => Number(a.charCodeAt()) > Number(b.charCodeAt()))
    arr = arr.sort((a,b) => a.length > b.length)
    console.log(arr.join(' ' + '\n'))
}
/*
SortArrayCriteria(['test',
    'Deny',
    'omen',
    'Default'])
*/

//SortArrayCriteria(['alpha',
//    'beta',
//    'gamma'
//    ])






