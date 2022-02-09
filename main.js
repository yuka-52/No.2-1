'use strict';

const timer = document.getElementById('timer') ;
const start = document.getElementById('start') ;
const stop = document.getElementById('stop') ;
const reset = document.getElementById('reset') ;

let elapsed= 0 ;

let intervalId=null;

function countUp(){
    const ms = elapsed % 1000;
    const s = Math.floor(elapsed/ 1000)% 60;
    const m = Math.floor(elapsed/(1000*60))%60;
    const h = Math.floor(elapsed/(1000*60*60));
    const msStr=ms.toString().slice(0,1);
    const sStr=s.toString().padStart(1,"0");
    const mStr=m.toString().padStart(1,"0");
    const hStr=h.toString().padStart(1,"0");
    
    timer.innerHTML =`${hStr}:${mStr}:${sStr}:${msStr}`;
    
}
start.addEventListener('click',function(c){
    if(intervalId !== null) {return;}
    let pre=new Date();
    intervalId=setInterval(function(){
    const now = new Date;
    elapsed += now - pre;
    pre = now;
    countUp();
    },10);
  });

stop.addEventListener('click', function(c){
    clearInterval(intervalId);
    intervalId=null;
});

reset.addEventListener('click',function(c) {
   elapsed=0; 
   countUp();
});

function setDisabled(){
　　document.getElementById('start').disabled=true;
}
function removeDisabled(){
    document.getElementById('start').disabled=false;
}