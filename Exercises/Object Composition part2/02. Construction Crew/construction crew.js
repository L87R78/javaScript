/*
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
//}))
*/

function solve(obj) {
	let weight = obj.weight;
	let experience = obj.experience;
	let alcoholLevel= obj.bloodAlcoholLevel;
	let handsShaking = obj.handsShaking;
	
	if(handsShaking){
		let result = experience * 0.1;
		result = (result * weight) + alcoholLevel;
		
		obj.bloodAlcoholLevel = result;
		obj.handsShaking = false;
		return obj
	}else {
		return obj
	}
}
solve({ weight: 80,
	experience: 1,
	bloodAlcoholLevel: 0,
	handsShaking: true })
