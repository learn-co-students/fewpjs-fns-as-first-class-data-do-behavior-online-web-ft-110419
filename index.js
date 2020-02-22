/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let hour = time.split(":")[0];
  let greeting = '';

  if (hour < 12) 
    greeting = "Good Morning"
  else if (hour > 12 && hour < 17)
    greeting = "Good Afternoon"
  else 
    greeting = "Good Evening"; 

  return greeting 
}
/* Write your implementation of displayMessage() */
function displayMessage(greetingResult){
  greet = document.getElementById('greeting');
  greet.innerText = greetingResult; 
}
