let expect = require("chai").expect

function sum() {
    let sum = 0;
    for(num of arr){
        sum += Number(num);
        return sum;
    }
}

describe("sum  function test", function () {
    it("Shoud returm 6 for [1,2,3]", function () {
        //Arrange
        let array = [1,2,3]
        //Act
        let result = sum(Array);
        //Assert
        expect(result).to.be.equal()
    })
});
