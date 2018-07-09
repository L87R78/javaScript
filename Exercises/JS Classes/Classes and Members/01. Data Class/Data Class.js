class Data {
	constructor(method, uri, version, message, response = undefined, fulfilled = false) {
		this.method = method;
		this.uri = uri;
		this.version = version;
		this.message = message;
		this.response = response;
		this.fulfilled = fulfilled;
	}
	/*
	 toString(){
		return `method: '${this.method}',
		 		uri: '${this.uri}',
				version: '${this.version}',
		 		message: '${this.message}',
		 		response: '${this.response}',
				fulfilled: '${this.fulfilled}'`
	 }
    */
}
let result = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(result);
