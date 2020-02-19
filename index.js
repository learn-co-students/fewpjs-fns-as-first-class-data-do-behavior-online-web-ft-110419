/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let message;
  let h = time.split(":")[0];
  let hour = parseInt(h);
    if (hour > 0 && hour < 12) {
    message = "Good Morning" }
  else if (hour >= 12 && hour < 17) {
    message = "Good Afternoon" }
    else if (hour > 17) {
      message = "Good Evening"}
      return message;
}

function displayMessage(message) {
  let element = document.querySelector("h1#greeting");
  element.innerText = message;
}




