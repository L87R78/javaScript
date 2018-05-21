function solve(arr, command) {

    if(command === 'asc'){
        arr.sort(function(a, b) {
            return a - b;
        });
        return arr
    }else{
        arr.sort(function(b, a) {
            return a - b;
        });
        return arr
    }
}
//solve([14, 7, 17, 6, 8], 'desc');

