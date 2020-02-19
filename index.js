/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(stringTime) {
  const num = parseInt(stringTime.split(":")[0]);
  let textvalue; 
    if (num < 12) {
       textvalue = "Good Morning"
    }else if (num > 12 && num < 17){
        textvalue = "Good Afternoon"
    }else {
        textvalue = "Good Evening"
    }
  return textvalue
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let gretting = document.querySelector('h1#greeting');
  gretting.innerText = string;
}


