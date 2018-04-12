function isPrime(num) {
    let prime = true;
    if(num === 0){
        console.log("false");
        return
    }
    for(var i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0) {
           prime =  false
            break
        }
    return prime && num > 1
}
//isPrime(0)