const clr = document.getElementById("clear")
document.getElementById("clear").onclick = clear;
var result = 0;
//let num1 = document.getElementByClassName("number");

// let operator = document.getElementByClassName("operator");

//document.getElementsByTagName("button").addEventListener("click", onScreen(this));


function add (a, b) {
	let result = a + b;
	return result;
}

function subtract (a, b) {
	let result = a - b;
	return result;
}

function sum (array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result = result + array[i];
	}
	return result;
}

function multiply () {
	var result = 1;
	for (let i = 0; i < arguments.length; i++) {
		
		result = result * arguments[i];
		}
		return result;
}

function power(a, b) {
	let result = a ** b;
	return result;
}

function factorial(n) {
	if (n < 0) {
		return -1;
	} 	else if (n == 0) {
			return 1;
			} else {
				return (n * factorial(n - 1));	
				}
}

function operate (num1, num2, operator) {

}

function clear(){

}

function showText(clicked) {	
	value = clicked.innerHTML;
	document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + " " + clicked.innerHTML;
	saveValues(value);
}

/*function onScreen(clicked) {
	var buttonTags = document.getElementsByTagName("button");
	for (let i = 0; i < buttonTags.length; i++) {
		buttonTags[i].addEventListener("click", showText(this.id));
	}
	
}
onScreen(); */

function saveValues(value){
	// check if previous 
}

