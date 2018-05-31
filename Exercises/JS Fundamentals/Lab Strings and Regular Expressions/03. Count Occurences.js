function input(inputKey, inputText) {
    let key = inputKey;
    let text = inputText;

    let count = 0;
    let temp = text.indexOf(key);
    while (temp != -1){
        count++;
        temp = text.indexOf(key, temp + 1);
    }
    console.log(count);
}
/*
input('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');
*/