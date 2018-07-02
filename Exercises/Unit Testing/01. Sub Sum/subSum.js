function subSum(arr, start, end) {
	if(!Array.isArray(arr)){ // проверка за масива да ли е масив
		return NaN
		//console.log(NaN)
	}
	start = start < 0 ? 0 : start
	end = end > arr.length - 1 ? arr.length - 1 : end
					//or
	/*
	if(start < 0){
		start = 0
	}
	if(end > arr.length - 1){
		end = arr.length - 1
	}
	*/
	
	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += Number(arr[i]);
		
	}
	return sum
}
//console.log(subSum([10, 'twenty', 30, 40], 0, 2));
//console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
//console.log(subsum([10, 'twenty', 30, 40], 0, 2));
//console.log(subsum([], 1, 2));
//console.log(subsum('text', 0, 2));