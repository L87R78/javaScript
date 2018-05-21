function solve(obj) {
    if(obj.handsShaking === true){
        let result = 0;
       obj.bloodAlcoholLevel += 0.1 * obj.experience * obj.weight;
       obj.handsShaking = false;

        return obj
    }
    return obj
}

//console.log(solve({
//     weight: 120,
//    experience: 20,
//    bloodAlcoholLevel: 200,
//    handsShaking: true
//}));//