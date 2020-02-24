/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
 let newTime = time.split(":");
 if (newTime[0] < 12) {
   return "Good Morning";
 } else if (newTime[0] > 12 && newTime[0] < 15) {
   return "Good Afternoon";
 } else {
   return "Good Evening";
 }
} 

/* Write your implementation of displayMessage() */
function displayMessage(greet) {
  let greeting = document.getElementById("greeting")
  greeting.innerText = greet
}
