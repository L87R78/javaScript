function evenNum(arr) {
    return arr.filter((e, i) => i % 2 == 0).join(' ');
}
//evenNum(['20', '30', '40']);