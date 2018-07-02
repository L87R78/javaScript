try{
	throw new Error('Range Error')
	console.log('This will never execute') // never print
} catch (error) { // name on error
	console.log(error);
	//or
	//console.log(error.message);
	
}