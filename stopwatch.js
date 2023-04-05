let secondsTemp=0,minutesTemp=0,hoursTemp=0;
let start=document.getElementById('startButton');
let end=document.getElementById('stopButton');
let reset=document.getElementById('restartButton');
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
            seconds=0;
            minutesTemp=0;
            hoursTemp=hoursTemp+1;
        }
        }
        if(secondsTemp<10)
        {document.getElementById("second").innerHTML="0"+secondsTemp;}
        else
        {document.getElementById("second").innerHTML=secondsTemp;}
        if(minutesTemp<10)
        {document.getElementById("minute").innerHTML="0"+minutesTemp;}
        else
        {document.getElementById("minute").innerHTML=minutesTemp;}
        if(hoursTemp<10)
        {document.getElementById("hour").innerHTML="0"+hoursTemp;}
        else
        {document.getElementById("hour").innerHTML=hoursTemp;}
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
    document.getElementById("second").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("hour").innerHTML="00";
});

