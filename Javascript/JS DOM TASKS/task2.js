var downloadBar=document.querySelector("#downloadBar")
var prg = document.querySelector("#progress")
var h3=document.querySelector("h3")


var count=0;
let int=setInterval(function(){
    if(count==100){
        clearInterval(int)
        h3.style.opacity=1;
        
    }
    count++;
    prg.style.width=count+"%"
   


},100)