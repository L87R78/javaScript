class person{
	
	constructor(fName, lName, age, email){
		this.firstName = fName;
		this.lastName = lName;
		this.age = age;
		this.email = email
	}
	toString(){
		return `${this.firstName}${this.lastName} (age: ${this.age}, email: ${this.email})`
	}
}
let input = new person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(input);