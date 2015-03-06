function hello(name){
	if(typeof name === 'undefined'){
		return "Hello!";
	} else {
		return "Hello, " + name + "!";
	}
}


// OR Conditional(Terenary Operator): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// function hello(name){
// 	return typeof name === "undefined"? "Hello!":"Hello, " + name + "!";
// }