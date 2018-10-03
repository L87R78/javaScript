function palindrome(str) {
    str = str.split("").reverse().join("") === str;
    console.log(str);
}
//palindrome('haha')
