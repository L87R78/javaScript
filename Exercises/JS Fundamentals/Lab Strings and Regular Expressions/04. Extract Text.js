function inputText(input) {
    let result = [];
    let open = input.indexOf('(');
    while (open > -1) {
        let close = input.indexOf(')', open);
        if (close == -1) {
            break;
        }
        let snipet = input.substring(open + 1, close);
        result.push(snipet);
        open = input.indexOf('(', close);
    }
    console.log(result.join(', '));
}
//inputText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')
