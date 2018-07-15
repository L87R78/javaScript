class Stringer {
	constructor(innerStr, innerLength){
		this.innerStr = innerStr;
		this.innerLength = innerLength;
	}
	get innerLength(){
		return this._innerLength
	}
	set innerLength(value){
		if(value < 0){
			 this._innerLength = 0;
		}else{
			 this._innerLength = value;
		}
	}
	
	increase(length){
		this.innerLength += length
	}
	decrease(length){
		this.innerLength -= length
	}
	toString(){
		if(this.innerStr.length < this._innerLength) {
			ret//urn this.innerStr
		}
		return this.innerStr.substring(0, this._innerLength) + '...';
	}
}

//let test = new Stringer("Test", 5);
//console.log(test.toString()); //Test
//
//test.decrease(3);
////console.log(test._innerLength);
//console.log(test.toString()); //Te...
//
//test.decrease(5);
////console.log(test._innerLength);
//console.log(test.toString()); //...
//
//test.increase(4);
////console.log(test._innerLength);
//console.log(test.toString()); //Test