function start(text, key) {
    let lengthKey = key.length;
    let check = text.substring(0, lengthKey);

    if(check === key){
        console.log('true');
    }else{
        console.log('false');
    }
}
start('How have you been?',
    'how');