function colorfulNumbers(input) {
    console.log("<ul>");
    for (let i = 0; i < input; i++) {
        if (i % 2 == 0){
            console.log(`"<li><span style='color:green'>${i + 1}</span></li>"`)
        }
        else if(i % 2 == 1){
            console.log(`"<li><span style='color:blue'>${i + 1}</span></li>"`)
        }
    }
    console.log("</ul>");
}
//colorfulNumbers(10)