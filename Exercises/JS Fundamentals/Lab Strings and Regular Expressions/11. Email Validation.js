function validEmail(email) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;

    //let result = email.match(regex);
    let temp = regex.test(email);
    if(temp == true){
        console.log('Valid')
    }else{
        console.log('Invalid')
    }
}
//validEmail('valid@email.bg');