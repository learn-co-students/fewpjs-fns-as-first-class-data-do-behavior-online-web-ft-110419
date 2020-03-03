/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(time) {
let timeArr = time.split(":")
	let hour = parseFloat(timeArr[0])
	if (hour < 12) {
		return "Good Morning"
	} 
	else if (hour > 17) {
		return "Good Evening"
	}
	else if (hour >= 12 && hour <= 17) {
		return "Good Afternoon"
	}
}

function displayMessage(something) {
 document.getElementById("greeting").innerText = something
}