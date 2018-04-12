function rounding(arr) {

    let nums = arr[0];
    let fix = arr[1];
    let tempNums = nums.toString();
    let splitNums = tempNums.split('.');

    if(splitNums[1].length < fix){

        console.log(nums)
        return;
    }

    console.log(nums.toFixed(fix));

}
//rounding([10.52, 3]);