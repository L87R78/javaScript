function end(text, key) {
    let lengthKey = key.length;
    let check = text.substring(text.length - lengthKey);

    if(check === key){
        console.log('true');
    }else{
        console.log('false');
    }
}
end('This sentence ends with fun?',
    'fun?');