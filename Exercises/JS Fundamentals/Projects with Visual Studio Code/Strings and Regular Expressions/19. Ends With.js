function endsWith(str1, str2){
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    let str = '';

    for (let a = 0; a < arr1.length; a++) {
           let word1 = arr1[a];
       for (let b = 0; b < arr2.length; b++) {
           let word2 = arr2[b];

           let n = word1.indexOf(word2);
           if(n !== -1){
               str += word2 + ' ';
                arr2 = arr2.slice(1);
           }
           break;
        }  
    }
   
    if(str.length !== 0){
        console.log('true')
    }
    else(
        console.log('false')
    )
    
}
endsWith('This is Houston, we have…', 
'We have…')