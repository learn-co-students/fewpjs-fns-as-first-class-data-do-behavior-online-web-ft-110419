/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = time.split(':')
  let hourInt = parseInt(hour[0],10)
  if (hourInt < 12) {
    return "Good Morning"
  } else if (hourInt > 12 && hourInt < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = message
}