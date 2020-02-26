/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let time = parseInt(timeString)
  let greeting = "Good Morning"

  if (time >= 12 && time < 17) {
    greeting = "Good Afternoon"
  } else if (time >= 17) {
    greeting = "Good Evening"
  }
  return greeting
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById('greeting').innerText = greeting
}