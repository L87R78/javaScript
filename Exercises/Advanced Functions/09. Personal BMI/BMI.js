
function solve() {
    let name = arguments[0];
    let age = arguments[1];
    let weight = arguments[2];
    let height = arguments[3];

    let result = {};

    let objInfo = {
        age: Number(age),
        weight: Number(weight),
        height: Number(height)
    };

    let BMI = Math.round(weight/(height/100 * height/100));
    let status = findStatus(BMI);

    result['name'] = name;
    result['personalInfo'] = objInfo;
    result['BMI'] = Number(BMI);
    result['status'] = status;

    if(status === 'obese'){
        result['recommendation'] = "admission required"
    }

    function findStatus(BMI) {
        if (Number(BMI) < 18.5) {
            return 'underweight'
        }
        else if (Number(BMI) < 25) {
            return 'normal'
        }
        else if (Number(BMI) < 30) {
            return 'overweight'
        }
        else {
            return 'obese'
        }
    }
    return result
}
//console.log(solve('Peter', 29, 75, 182));

/*
function solution (name,age,weight,height) {
    let result = {};

    let personalInfo = {age: Number(age),
        weight:Number(weight),
        height:Number(height)};

    let BMI = Math.round(weight/(height/100*height/100));

    let status = findStatus(BMI);

    result['name'] = name;
    result['personalInfo'] = personalInfo;
    result['BMI'] = Number(BMI);
    result['status'] = status;

    if(status === 'obese'){
        result['recommendation'] = "admission required"
    }

    function findStatus(BMI) {
        if(Number(BMI)<18.5){
            return 'underweight'
        }
        else if(Number(BMI)<25){
            return 'normal'
        }
        else if(Number(BMI)<30){
            return 'overweight'
        }
        else{
            return 'obese'
        }
    }
    return result
}

console.log(solution('gogo', 14, 8000, 180));
*/

