/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input) {
  let hour = input.split(':')
  if (hour[0] < 12)
    return "Good Morning"
  else if (hour[0] >= 12 && hour[0] < 17)
    return "Good Afternoon"
  else 
    return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(words) {
  document.getElementById("greeting").innerText = words
}