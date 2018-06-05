function findNum(input) {
    let regex = /[0-9{1,99}]+/g;
    let list = [];

    let m = regex.exec(input);
   while (m){
       list.push(m[0]);

       m = regex.exec(input);
   }
   console.log(list.join(' '));

}
findNum('The300\n' +
    'What is that?\n' +
    'I think it’s the 3rd movie.\n' +
    'Lets watch it at 22:45');