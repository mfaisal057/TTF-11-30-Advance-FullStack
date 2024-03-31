var add= document.querySelector('#add')
var remove =document.querySelector('#remove')
var inp=document.querySelector('input')
var ul=document.querySelector('ul')




add.addEventListener("click",function(){
   var li= document.createElement('li')

   let val=inp.value;
   ul.appendChild(li);
   
    

})