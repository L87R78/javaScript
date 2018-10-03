function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let word = extractWords();
    
    word = word.filter(w => w !== '');
    console.log(word.join(', '));

    function extractWords() {
        return strUpper.split(/\W+/);
    }
}
//wordsUppercase(' Hi, how are you ?');