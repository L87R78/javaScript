function sumAndVAT(arr) {
    let sum = 0;
    let vat = 0;
    let sumVat = 0;

    for(let num of arr){
        sum += Number(num);
    }
    vat = (sum / 100) * 20;
    sumVat = sum + vat;
    console.log(`sum = ${sum}`)
    console.log(`VAT = ${vat}`)
    console.log(`total = ${sumVat}`)
}
//sumAndVAT([1.20, 2.60, 3.50]);