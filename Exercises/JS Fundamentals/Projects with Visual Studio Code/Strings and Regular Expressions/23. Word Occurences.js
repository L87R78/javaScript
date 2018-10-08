function wordOccurences(text, key){
    /*
    let element = key.toLowerCase();
    let count = 0;
    let temp = text.toLowerCase().indexOf(element);
   while (temp != -1){

       count++;
       temp = text.toLowerCase().indexOf(element, temp + 1);

   }
   console.log(count);
   */
   let element = key.toLowerCase();
   let count = 0;
   let arr = text.split(' ');
   for (let i = 0; i < arr.length; i++) {
       let word = arr[i].toLowerCase();
       let test = word.indexOf(element);

       if(test !== -1 && element.length + 1 >= word.length){
           count++;
       }
   }
   console.log(count)
}
wordOccurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 
'there');