function aggregateTable(arr){

    let arrTown = [];
    let arrSum = [];
    let pattern = /(([A-Za-z]|\s{1}[A-Za-z])+)\s*\|\s*([\d]+)/;
    for (let iterator of arr) {
        let temp = pattern.exec(iterator);
        arrTown.push(temp[1].trim());
        arrSum.push(Number(temp[3]));
        
    }
    console.log(arrTown.join(', '))
    let sum = arrSum.reduce((x, y) => x + y);
    console.log(sum)
}
aggregateTable(['| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275']
);