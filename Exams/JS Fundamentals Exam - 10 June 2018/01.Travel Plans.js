function solve(arr) {

    let list = arr.split(',');

    for (let listElement of list) {
       let splitListElemenet = listElement.split(':');
       let profession = splitListElemenet[0];
        console.log(profession);

        

    }

}
solve('["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199’, "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]\n');