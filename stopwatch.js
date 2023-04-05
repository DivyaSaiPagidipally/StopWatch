let secondsTemp=0,minutesTemp=0,hoursTemp=0;
let start=document.getElementById('startButton');
let end=document.getElementById('stopButton');
let reset=document.getElementById('resetButton');
let seconds=document.getElementById("second");
let minutes=document.getElementById("minute");
let hours=document.getElementById("hour");
let intervalId=null;
start.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId=setInterval(function(){
        secondsTemp=secondsTemp+1;
        if(secondsTemp==60)
        {
            secondsTemp=0;
            minutesTemp=minutesTemp+1;
            if(minutesTemp==60)
        {
            secondsTemp=0;
            minutesTemp=0;
            hoursTemp=hoursTemp+1;
        }
        }
      appendPrint(secondsTemp,minutesTemp,hoursTemp);
    },1000);    
});
end.addEventListener('click',function(){
    clearInterval(intervalId);
});
reset.addEventListener('click',function(){
    clearInterval(intervalId);
    secondsTemp=0;
    minutesTemp=0;
    hoursTemp=0;
    seconds.innerHTML="00";
    minutes.innerHTML="00";
    hours.innerHTML="00";
});
function appendPrint(secondsTemp,minutesTemp,hoursTemp)
{if(secondsTemp<10)
    {seconds.innerHTML="0"+secondsTemp;}
    else
    {seconds.innerHTML=secondsTemp;}
    if(minutesTemp<10)
    {minutes.innerHTML="0"+minutesTemp;}
    else
    {minutes.innerHTML=minutesTemp;}
    if(hoursTemp<10)
    {hours.innerHTML="0"+hoursTemp;}
    else
    {hours.innerHTML=hoursTemp;}
}
