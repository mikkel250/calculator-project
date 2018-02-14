// get all the keys from the document
// var calc = document.querySelector("#calculatorSurface");
var keys = document.querySelectorAll("#calculatorSurface button");
var operators = [`+`, `-`, `*`, `/`];
var decimalAdded = false;

//add the onclick event to all keys
for(let i = 0; i < keys.length; i++) {
	// the e in this case is the event
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
				var equation = inputVal;
				var lastChar = equation[equation.length -1];
				// check the last character of the equation and remove decimal or operator if present
				
				if(operators.indexOf(lastChar) > -1 || lastChar == '.'){ equation = equation.replace(/.$/, "");	}
				
				if(equation){
					// the eval function evaluates javascript code represented as a string
					// so what is essentially being done here is using the screen to store the whole operation.
					input.innerHTML = eval(equation);
					decimalAdded = false;
			}
		// add some checks for user error
		} else if(operators.indexOf(buttonVal) > -1) {
				// if operator is clicked last, get the last character from the equation instead
				var lastChar = inputVal[inputVal.length -1];
			
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
			
			// using the decimalAdded flag will prevent the use of more than one decimal per string
		} else if(buttonVal == `.`) {
				if(!decimalAdded) {
				input.innerHTML += buttonVal;
				decimalAdded = true;
			}
		} else { 
			input.innerHTML += buttonVal;
		}
		// prevent page jumps
		e.preventDefault();
  }
}

		

