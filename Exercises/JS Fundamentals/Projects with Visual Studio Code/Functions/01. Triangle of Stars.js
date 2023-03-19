function solve(num) {
    let str = '';
    for (let index = 1; index <= num; index++) {
        console.log('*'.repeat(index))
    }
    for (let index = num - 1; index > 0; index--) {
        console.log('*'.repeat(index))
    }
}
solution(5)