function countWord(input, wordKey) {

    let list = input.split(' ');
    let count = 0;
    let keyWord = wordKey;
    keyWord = keyWord.toLowerCase();

    for (let i = 0; i < list.length; i++) {
       let word = list[i];
       word = word.replace(/\W|\d+/g, '');
       word = word.trim();
       word = word.toLowerCase();

       let firstLetterWord = word.substr(0, 1);
       let firstLetterKeyWord = keyWord.substr(0, 1);

       if(firstLetterWord === firstLetterKeyWord){

           let tempWord = word.substr(1,word.length - 1);
           let tempKeyWord = keyWord.substr(1,keyWord.length - 1);

           if(tempWord === tempKeyWord){
               count++;
           }
       }
    }
    console.log(count);
}
countWord('hoW How? How can you even think of that?',
'how');