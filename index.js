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
 } else if (newTime[0] > 12 && newTime[0] < 17) {
   return "Good Afternoon";
 } else {
   return "Good Evening";
 }
} 

// or you can write it like this: 

// function greet(time){
//  let newTime = parseInt(time, 10);
//  if (newTime < 12) {
//    return "Good Morning";
//  } else if (newTime > 12 && newTime < 17) {
//    return "Good Afternoon";
//  } else {
//    return "Good Evening";
//  }
// } 

// What parseInt is doing is it takes arguments of: parseInt(string, [, radix])
// An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string. 
//Be careful—this does not default to 10!

//In mathematics, a base or radix is the number of different digits or combination of digits and letters that a system
//of counting uses to represent numbers. For example, the most common base used today is the decimal system. 
//Because "dec" means 10, it uses the 10 digits from 0 to 9.
//Binary (base 2) is used because at the most simple level, computers can only deal with 0s and 1s.
//Hexadecimal (base 16) is used because of how computers group binary digits together

/* Write your implementation of displayMessage() */
function displayMessage(greet) {
  document.getElementById("greeting").innerText = greet
}
