/*
function secretData(text) {
    let symbol = '|';

     let nameClients = /(\*[A-Z]{1}[A-Za-z]*)*(?= |\t|$)/g;
     let phoneNumbers = /(\+[0-9-]{10})(?= |\t|$)/g;
     let ID =  /(![a-zA-z0-9]+)(?= |\t|$)/g;
     let secretBases = /(_[a-zA-Z0-9]+)(?= |\t|$)/g;

    //length nameClients
    let lengthRegexNameClients = 0;
    let matchesNameClients = text.match(nameClients);
    if (matchesNameClients && matchesNameClients.length) {
        lengthRegexNameClients = matchesNameClients[0].length - 1;
    }

    //length phoneNumbers
    let lengthphoneNumbers = 0;
    let matchesPhoneNumbers = text.match(phoneNumbers);
    if (matchesPhoneNumbers && matchesPhoneNumbers.length) {
        lengthphoneNumbers = matchesPhoneNumbers[0].length - 1;
    }

    //length ID
    let lengthID = 0;
    let matchesID = text.match(ID);
    if (matchesID && matchesID.length) {
        lengthID = matchesID[0].length - 1;
    }

    //length ID
    let lengthSecretBases = 0;
    let matchesSecretBases = text.match(secretBases);
    if (matchesSecretBases && matchesSecretBases.length) {
        lengthSecretBases = matchesSecretBases[0].length - 1;
    }

    text = text.replace(NameClients, '|'.repeat(lengthRegexNameClients) + ' ');
    text = text.replace(phoneNumbers, '|'.repeat(lengthphoneNumbers) + ' ');
    text = text.replace(ID, '|'.repeat(lengthID) + ' ');
    text = text.replace(secretBases, '|'.repeat(lengthSecretBases) + ' ');
    console.log(text);
}
secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);
*/

function secretData(text) {

    let objPattern = {
         nameClients: /(\*[A-Z]{1}[A-Za-z]*)*(?= |\t|$)/g,
         phoneNumbers: /(\+[0-9-]{10})(?= |\t|$)/g,
         ID: /(![a-zA-z0-9]+)(?= |\t|$)/g,
         secretBases: /(_[a-zA-Z0-9]+)(?= |\t|$)/g
    };

    let output = '';
    for (let string of text) {
        for (const pattern of Object.values(objPattern)) {
            string = string.replace(pattern, function (match) {
                return '|'.repeat(match.length);
            });
        }
        output += string + '\n';
    }
    console.log(output);
}
secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);
