function bill(input){
    let order = [];
    let price = [];

   for (let i = 0; i < input.length; i++) {
   
        if(i % 2 === 0){
            order.push(input[i]);
        }else{
            price.push(Number(input[i]))
        }
   } 
   let resultSumBill = price.reduce((acc, num) => { 
            return acc + num
    })
   console.log(`You purchased ${order.join(', ')} for a total sum of ${resultSumBill}`)
}
//bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])