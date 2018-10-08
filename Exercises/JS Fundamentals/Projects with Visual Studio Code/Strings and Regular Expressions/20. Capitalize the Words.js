function capitalizeWord(str){
    let arr = str.split(' ');
    let strResult = '';

    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr[a].length; b++) {
            if(b === 0){
                strResult += arr[a][b].toUpperCase();
            }
            else{
                strResult += arr[a][b].toLowerCase();
            }
        }
        strResult += ' ';
    }
    console.log(strResult.trim())
}
capitalizeWord('Was that Easy? tRY thIs onE for SiZe!');