function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(string) {
  let time = string.split(":")
  
  if (parseInt(time[0]) < 12) {
    
    return "Good Morning"
    
  } else if (parseInt(time[0]) >= 12 && parseInt(time[0]) <= 17) {
    
    return "Good Afternoon"
    
  } else {
     
     return "Good Evening"
  
  }
}

function displayMessage(string) {
  let element = document.getElementById("greeting");
  element.innerText = string
} 
  
