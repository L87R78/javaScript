function matchWords(text){
    let pattern = /\w+/gi;
    let test = text.match(pattern)
    console.log(test.join('|'))
}
//matchWords('_(Underscores)      are also word characters');