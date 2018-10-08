function matchDates(arr){
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})+\b/g;
    if(arr.length === 0){
        return;
    }

    let arrResult = [];
    for (let ar of arr) {
        let temp = ar.match(pattern)
        if(temp !== null){
              arrResult.push(temp)
        }
    }

    for (let ar of arrResult) {
        let split = ar[0].split('-')
        console.log(`${ar} (Day: ${split[0]}, Month: ${split[1]}, Year: ${split[2]})`)
    }
}

matchDates([])