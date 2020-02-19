function handleClick(e)
{
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

function greet(time)
{
  let numTime = parseInt(time.split(':')[0]) + parseInt(time.split(':')[1]) / 100;
  if (numTime < 12)
  {
    return "Good Morning";
  }
  else if (numTime >= 12 && numTime < 17)
  {
    return "Good Afternoon";
  }
  else
  {
    return "Good Evening";
  }
}

function displayMessage(greeting)
{
  document.getElementById("greeting").innerText = greeting;
}
