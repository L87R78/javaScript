function capitalizeWords(text) {
    let list = text.split(' ');
    let resultStr = '';

    for (let i = 0; i < list.length; i++) {
        let word = list[i];
        let firstLetter = word.substring(0, 1).toUpperCase();
        let lastText = word.substr(1, word.length - 1).toLowerCase();
        word = firstLetter + lastText;

        resultStr += word + ' ';
    }
    console.log(resultStr.trim());
}
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');