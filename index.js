/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let time = parseInt(string);
  let hour = string.split(':')[0];
  if (hour > 0 && hour < 12)
    return "Good Morning";
  else if (hour > 11 && hour < 18)
    return "Good Afternoon";
  else
    return "Good Evening";
}

function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;
}