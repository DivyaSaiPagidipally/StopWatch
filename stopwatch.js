let s=0,m=0,h=0;
let a=document.getElementById('start_btn');
let b=document.getElementById('stop_btn');
let c=document.getElementById('restart_btn');
let intervalId=null;
a.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId=setInterval(function(){
        s=s+1;
        if(s==60)
        {
            s=0;
            m=m+1;
            if(m==60)
        {
            s=0;
            m=0;
            h=h+1;
        }
        }
        if(s<10)
        {document.getElementById("second").innerHTML="0"+s;}
        else
        {document.getElementById("second").innerHTML=s;}
        if(m<10)
        {document.getElementById("minute").innerHTML="0"+m;}
        else
        {document.getElementById("minute").innerHTML=m;}
        if(h<10)
        {document.getElementById("hour").innerHTML="0"+h;}
        else
        {document.getElementById("hour").innerHTML=h;}
    },1000);    
});
b.addEventListener('click',function(){
    clearInterval(intervalId);
});
c.addEventListener('click',function(){
    clearInterval(intervalId);
    s=0;
    m=0;
    h=0;
    document.getElementById("second").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("hour").innerHTML="00";
});

