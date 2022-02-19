let time = document.querySelector("#time");

function currentTime()  
{
    time.textContent = new Date().toLocaleTimeString();
}
setInterval(currentTime,1000);
console.log("Script executed");