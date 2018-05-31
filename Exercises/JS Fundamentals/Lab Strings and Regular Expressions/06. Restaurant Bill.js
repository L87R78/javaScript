function bill(input) {
    let arr = [];
    let sumBill = 0;

    for (let i = 0; i < input.length; i++) {
        if(i % 2 == 0){
            arr.push(input[i]);
        }
        else{
            sumBill += Number(input[i]);
        }

    }
    let str = "You purchased ";

    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ", ";

    }
    str = str.substring(0, str.length - 2);


    console.log(`${str} for a total sum of ${sumBill}`);

}
//bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);