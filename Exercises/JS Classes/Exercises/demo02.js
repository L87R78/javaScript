/*
class Data{
	constructor(method, uri, version, message, response = undefined, fulfilled = false ){
		this.method = method;
		this.uri = uri;
		this.version = version;
		this.message = message;
		this.response = response;
		this.fulfilled = fulfilled;
	}
}
let result = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(result);
*/

class CheckingAccount {
	constructor(clientId, email, firstName, lastName){
		this.clientId = clientId;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	get clientId(){
		return this._clientId
	}
	set clientId(clientId){
		if(!/^[0-9]{1,6}$/g.test(clientId)){
			throw new TypeError('Client ID must be a 6-digit number');
		}
		this._clientId = clientId
	}
	
	get email(){
		return this._email
	}
	set email(email){
		if(!/^[a-zA-Z]+\@[a-zA-Z|\.]+$/g.test(email)){
			throw new TypeError('Invalid e-mail');
		}
		this._email= email
	}
	get fName(){
		return this._firstName
	}
	set firstName(firstName){
		if(!/^[a-zA-Z]{3,20}$/g.test(firstName)){
			throw new TypeError('First name must be between 3 and 20 characters long');
		}
		if(!/^[a-zA-Z]+$/g.test(this.firstName)){
			throw new TypeError('First name must contain only Latin characters');
		}
		
		this._firstName = firstName
	}
	
	get lastName(){
		return this._lastName
	}
	set lastName(lastName){
		if(!/^[a-zA-Z]{3,20}$/g.test(lastName)){
			throw new TypeError('Last name must be between 3 and 20 characters long');
		}
		if(!/^[a-zA-Z]+$/g.test(lastName)){
			throw new TypeError('Last name must contain only Latin characters');
		}
		
		this._lastName = lastName
	}
}

let acc = new CheckingAccount('13425', 'ivan@some.com', 'Isasas', 'Petrov');


