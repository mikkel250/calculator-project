// get all the keys from the document
// var calc = document.querySelector("#calculatorSurface");
var keys = document.querySelectorAll("#calculatorSurface button");
var operators = [`+`, `-`, `*`, `/`];
var decimalAdded = false;

// loop through all the keys because the querySelectorAll gives a nodelist and the onclick event must be added to each one
for(let i = 0; i < keys.length; i++) {
	// Add the onclick event to all keys. the e in this case is the event
	keys[i].onclick = function(e) {
		//get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var buttonVal = this.innerHTML;
		// erase everything if clear button is pressed
		if(buttonVal == `CLR`) {
			input.innerHTML = "";
			decimalAdded = false;
			// if equals button is pressed, calculate and display result
		} else if(buttonVal == '=') {
			// take everything in the screen and store it (as string) into the variable equation
				var equation = inputVal;  // append equation to variable
				var lastChar = equation[equation.length -1]; // target the end of the eval string
				
				// check the last character of the equation and remove decimal or operator if present				
				if(operators.indexOf(lastChar) > -1 || lastChar == '.'){ equation = equation.replace(/.$/, "");	}
				
				if(equation){
					// the eval function evaluates javascript code represented as a string
					// so what is essentially being done here is using the screen to store the whole operation.
					input.innerHTML = eval(equation);
					decimalAdded = false;
			}
			// if backspace button pressed, replace the last char with empty char
		} else if (buttonVal == 'Backspace') {
			input.innerHTML = inputVal.replace(/.$/, "");
			
			// add some checks for user error

			// Do not allow more than two operators to be added consecutively
		} else if (operators.indexOf(buttonVal) > -1) {
				// if operator is clicked last, get the last character from the equation instead
				var lastChar = inputVal[inputVal.length -1];
			// only add operator if input is not empty
				if(inputVal != "" && operators.indexOf(lastChar) == -1) {
					input.innerHTML += buttonVal;
				//allow minus if the input string is empty (for negative values)
				} else if(inputVal == "" && buttonVal == `-`) {
					input.innerHTML += buttonVal;
				}
			// replace the last operator (if exists) with the newly passed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) { input.innerHTML = inputVal.replace(/.$/, buttonVal); }
				/* above: the "." matches any character, while the $ denotes the end of the string, so anything  
				(an operator in this case, determined above) at the end of the string will be replaced by the 
				new operator */
				
		decimalAdded = false;
			
			// add decimal. using the decimalAdded flag will prevent the use of more than one decimal per string
		} else if(buttonVal == `.`) {
				if(!decimalAdded) {
				input.innerHTML += buttonVal;
				decimalAdded = true;
			}
			// if any other key is pressed, just add it 
		} else { 
			input.innerHTML += buttonVal;
		}
		// prevent page jumps
		e.preventDefault();
  }
}

		

