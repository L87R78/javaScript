function solve(num){
    let arr = [];
    let str = 'ATCGTTAGGG';

    for (let letter of str) {
        arr.push(letter);
    }

    checkArr = function (arrLetter) {
       if(arrLetter === arr.length) {
           return arrLetter = 0;
       }
       return arrLetter;
    }
 
    for (let arrLetter = 0; arrLetter < num + 1; arrLetter++) {
        for (let a = 0; a < num; a++) {
            console.log('*'.repeat(2)+ `${arr[arrLetter] + arr[arrLetter + 1]}` + '*'.repeat(2))

            arrLetter += 2;
            arrLetter = checkArr(arrLetter);
            for (let b = 0; b < 3; b++) {
                if(b % 2 !== 0){
                    a++;
                    if (a === num) {
                        return;
                    }

                    console.log(`${arr[arrLetter] + '-'.repeat(4) + arr[arrLetter + 1]}`)

                    arrLetter += 2;
                    arrLetter = checkArr(arrLetter);
                } else {
                    a++
                    if (a === num) {
                        return;
                    }

                    console.log('*'.repeat(1) + `${arr[arrLetter] + '-'.repeat(2) + arr[arrLetter + 1]}` + '*'.repeat(1))

                    arrLetter += 2;
                    arrLetter = checkArr(arrLetter);
                }
            }
        } 
    }
}
solve(56);