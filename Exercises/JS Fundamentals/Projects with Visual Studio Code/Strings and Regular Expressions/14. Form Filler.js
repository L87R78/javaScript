function formFiller(username, email, phone, arr){
        let newArr = arr;

        let patternUserName = /<![A-Za-z]+!>/gi;
        let patternEmail = /<@[A-Za-z]+@>/gi;
        let patternPhone = /<\+[A-Za-z]+\+>/gi;
        for (let i = 0; i < newArr.length; i++) {
        
                let resultpatternUserName = patternUserName.exec(newArr[i]);
                let resultpatternEmail = patternEmail.exec(newArr[i]);
                let resultpatternPhone = patternPhone.exec(newArr[i]);

                while(i !== newArr.length){
                        if(resultpatternUserName !== null){
                                newArr[i] = newArr[i].replace(resultpatternUserName[0], username); 
                        }
                        if(resultpatternEmail !== null){
                                newArr[i] = newArr[i].replace(resultpatternEmail[0], email);
                        }
                        if(resultpatternPhone !== null){
                                newArr[i] = newArr[i].replace(resultpatternPhone[0], phone); 
                        }
                        break;
                }
        }
        console.log(newArr.join('\n'))
}
formFiller('Pesho',
'pesho@softuni.bg',
'90-60-90',
['Hello, <!username!>!',
 'Welcome to your Personal profile.',
 'Here you can modify your profile freely.',
 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);