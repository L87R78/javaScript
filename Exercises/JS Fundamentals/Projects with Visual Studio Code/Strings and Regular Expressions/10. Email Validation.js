function emailValidation(input){
    let pattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/gi;
    let test = pattern.test(input)
    if(test === true){
        console.log('Valid')
    }else{
        console.log('Invalid')
    }
}
//emailValidation('valid@email.bg');