let expect = require('chai').expect;

function isSymmetric(arr) {
	if (!Array.isArray(arr))
		return false; // Non-arrays are non-symmetric
	let reversed = arr.slice(0).reverse(); // Clone and reverse
	let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
	return equal;
}

//console.log(isSymmetric([1, 2, 3, 2, 2]));

describe('array symmetric', function () {
	describe('test for true', function () {
		it('Should return true for [1,2,2,1]', function () {
			//Arrange
			let array = [1, 2, 2, 1];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(true).to.be.true
		});
		it('Should return 0 for []', function () {
			//Arrange
			let array = [];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(true).to.be.true
		});
		it('Should return true for [1]', function () {
			//Arrange
			let array = [1];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(true).to.be.true
		});
		it('Should return true for [2,"s",{},"s",2]', function () {
			//Arrange
			let array = [2,"s",{},"s",2];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(true).to.be.true
		});
		it('Should return true for [5,"hi",{a:5},new Date(),{a:5},"hi", 5;]', function () {
			//Arrange
			let array = [5,"hi",{a:5},new Date(),{a:5},"hi",5];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(true).to.be.true
		});
	});
	describe('test for false', function	(){
		it('Should return false for [1,2,2,3]', function () {
			//Arrange
			let array = [1, 2, 2, 3];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		it('Should return 0 for []', function () {
			//Arrange
			let array = [];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		
		it('Should return false for string', function () {
			//Arrange
			let array = 'hahahaaa';
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		it('Should return false for {}', function () {
			//Arrange
			let array = {};
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		it('Should return false for numbers', function () {
			//Arrange
			let array = 3232323232;
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		it('Should return false for function', function () {
			//Arrange
			let array = function () {
			
			};
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		
		it('Should return false for [-1,2,2 1]', function () {
			//Arrange
			let array = [-1, 2, 2, 1];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		it('Should return false for [-2,"s",{},"s",2]', function () {
			//Arrange
			let array = [-2,"s",{},"s",2];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
		it('Should return false for [-5,"hi",{a:5},new Date(),{a:5},"hi", 5;]', function () {
			//Arrange
			let array = [-5,"hi",{a:5},new Date(),{a:5},"hi",5];
			//Act
			let result = isSymmetric(array);
			//Assert
			expect(false).to.be.false
		});
	})
});


