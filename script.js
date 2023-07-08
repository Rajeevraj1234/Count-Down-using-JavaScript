var hour = 0;
var min = 0;
var sec = 6;
var timer;
var display = document.querySelector(".display");
var finish = document.querySelector(".finished");
var inc = document.querySelector(".incrementer");
var dec = document.querySelector(".decrementer");
var reset = document.querySelector(".reset");


function counterStart(){
    
    if(sec<=0 && min != 0){
        sec=59;         
        min--;
    }else if(sec<=0 && min == 0){
        sec = 0;
    }else{
        sec--;
    }

    if(min<=0 && hour != 0){
        min=59;         
        hour--;
    }else if(min<=0 && hour == 0){
        min = 0;
    }
    
    var h = hour<10 ? `0${hour}` : hour;
    var m = min<10 ? `0${min}` : min;
    var s = sec<10 ? `0${sec}`: sec;

    display.innerHTML = `${h}:${m}:${s}`;

    if(display.innerHTML == `00:00:00`){
        finish.style.display = "block";
    }
    

}    

// butttonssssssssssssssssssssssssssssssssssssssss

// START
inc.addEventListener("click",()=>{
    timer = setInterval(counterStart,1000);
})


//STOP
dec.addEventListener("click",()=>{
    clearInterval(timer);
})

//RESET
reset.addEventListener("click",()=>{
    display.innerHTML = `00:00:00`;
    clearInterval(timer);
})