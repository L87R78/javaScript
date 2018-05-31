/*
function dates(input) {
    let regex = /\b[0-9]{1,2}-[A-Z][a-z]{2,2}-[0-9]{4,4}/gm;
    let date = input.match(regex);

    for (let i = 0; i < date.length; i++) {
        let dateSplit = date[i].split('-');
        console.log(`${date[i]} (Day: ${dateSplit[0]}, Month: ${dateSplit[1]}, Year: ${dateSplit[2]})`);
    }
}
dates('I am born on 30-Dec-1994.\n' +
    'This is not date: 512-Jan-1996.\n' +
    'My father is born on the 29-Jul-1955.\n');
*/

function dates(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4,4})\b/gm;

    for (let i = 0; i < input.length; i++) {
        let match = regex.exec(input);
        if(match === null){
            break;
        }
        console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
    }
}
dates('I am born on 30-Ded-1994.\n' +
    'This is not date: 512-Jan-1996.\n' +
    'My father is born on the 29-Jd3-1955.\n');