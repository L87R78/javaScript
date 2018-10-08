function checkString(str1, str2){
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');

    for (let a = 0; a < arr1.length; a++) {
           let word1 = arr1[a];
       for (let b = a; b < arr2.length; b++) {
           let lengthStr2 = Number(arr2[a].length)
           let word2 = arr2[b];
           word1 = word1.substr(0, lengthStr2);

           if(word1 !== word2){
                return console.log('false')
           }

           break;
        }  
    }
    console.log('true');
}
checkString('The quick brown fox…', 
'The quick brown fox…');