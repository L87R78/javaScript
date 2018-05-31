function matchMulti(input) {

    let regex = /([\+|\-0-9{1,9}]+)\s*\*\s*([0-9{1,9}]\.[0-9{1,9}]+)/gm;

    input = input.replace(regex, (match, num1, num2) => Number(num1) * Number(num2));

    console.log(input);
}
matchMulti('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).\n');
