/*
function calculator(num1, num2, str){
    let result = eval(num1 + str + num2)
    console.log(result)
}
//calculator(2, 4, '/');
*/

//-------------------------------------------------------------------------------------
function calculator(a, b, operator) {
    /*
    
    let distraction = (a, b) => {
        return a - b;
    }
    let sum = (a, b) => {
        return a + b;
    }
    let division = (a, b) => {
        return a / b;
    }
    function multiplication (a,) {
         console.log(a * b)
    }


    if(operator === '-'){
        console.log(distraction);
    }else if(operator === '+'){
        console.log(sum);
    }else if (operator === '/') {
        console.log(division);
    }else if (operator === '*') {
        return multiplication;
    }
    */
    


    
     let calc = function (a, b, op) {
         return op(a, b)
     }


     let distraction = function(a, b){
         return a - b;
     }
     let sum = function (a, b) {
         return a + b;
     }
     let division = function (a, b) {
         return a - b;
     }
     let multiplicate = function (a, b) {
         return a - b;
     }

     switch(op){
         case '+': return calc(a, b, sum);
         case '/': return calc(a, b, division);
         case '-': return calc(a, b, distraction);
         case '*': return calc(a, b, multiplicate);
     }
     
    
}
//console.log(calculator(2, 5, '*'))