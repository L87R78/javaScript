function input(email) {
    let list = [];
    for (let i = 0; i < email.length; i++) {
        let tempLastElementEmail = "";


        let startIndex = email[i].indexOf('@');
        let firstPartEmail = email[i].substr(0, startIndex);

        let lastPartEmail = email[i].substr(startIndex + 1);
        let splitLastText = lastPartEmail.split('.');

        for (let j = 0; j < splitLastText.length; j++) {
            tempLastElementEmail += splitLastText[j][0];
        }
        let result = firstPartEmail + '.' + tempLastElementEmail;

        list.push(result)
    }
    console.log(list.join(', '))
}
//input(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);