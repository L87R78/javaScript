let expect = require('chai').expect;
function createCalculator() {
	let value = 0;
	return {
		add: function(num) { value += Number(num); },
		subtract: function(num) { value -= Number(num); },
		get: function() { return value; }
	}
}

describe('Create calculator tests', function (){
	//Arrange
	let calc
	beforeEach(function () {
		calc = createCalculator()
	})
	describe('Add', function () {
		it("should return 0 after initialization", function () {
			//Act
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(0)
		});
		it("should return 5 after add 5", function () {
			//Act
			calc.add(5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(5)
		});
		it("should return 10 after add(5),add(5)", function () {
			//Act
			calc.add(5)
			calc.add(5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(10)
		});
		it("should return 10 after add(5.5),add(5.5)", function () {
			//Act
			calc.add(5.5)
			calc.add(5.5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(11)
		});
		it("should return 10 after add(-5.5),add(-5.5)", function () {
			//Act
			calc.add(-5.5)
			calc.add(-5.5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(-11)
		});
		it("should return 10 after addStr('5.5'),addStr('5.5')", function () {
			//Act
			calc.add('5.5')
			calc.add('5.5')
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(11)
		});
		it("should return NaN after addStr('pesho')", function () {
			//Act
			calc.add('pesho')
			let result = calc.get()
			//Assert
			expect(result).to.be.NaN
		});
	})
	describe('Subtract', function () {
		it("should return -5 after subtract 5", function () {
			//Act
			calc.subtract(5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(-5)
		});
		it("should return 5 after subtract 5", function () {
			//Act
			calc.subtract(5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(-5)
		});
		it("should return -10 after subtract(5),subtract(5)", function () {
			//Act
			calc.subtract(5)
			calc.subtract(5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(-10)
		});
		it("should return 10 after subtract(5.5),subtract(5.5)", function () {
			//Act
			calc.subtract(5.5)
			calc.subtract(5.5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(-11)
		});
		it("should return 10 after subtract(-5.5),subtract(-5.5)", function () {
			//Act
			calc.subtract(-5.5)
			calc.subtract(-5.5)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(11)
		});
		it("should return 10 after subtractStr('5.5'),subtractStr('5.5')", function () {
			//Act
			calc.subtract('5.5')
			calc.subtract('5.5')
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(-11)
		});
		it("should return NaN after subtractStr('pesho')", function () {
			//Act
			calc.subtract('pesho')
			let result = calc.get()
			//Assert
			expect(result).to.be.NaN
		});
	})
	describe('Add in combination with Subtract', function () {
		it("should return 20", function () {
			//Act
			calc.add(10)
			calc.add(10)
			calc.add(10)
			calc.subtract(10)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(20)
		});
		it("should return -10", function () {
			//Act
			calc.subtract(10)
			calc.subtract(10)
			calc.add(10)
			let result = calc.get()
			//Assert
			expect(result).to.be.equal(-10)
		});
	})
})