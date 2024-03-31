var data=[
    {name:"parekh",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"},
    {name:"puneet",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww"},
    {name:"harshit",src:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"}
]
var person="";

data.forEach(function(elem){
     person+=`  <div class="person">
    <div class="img">
        <img src="${elem.src}">
    </div>
    <h4>${elem.name}</h4>`
})

document.querySelector('.people').innerHTML=person;
var input=document.querySelector("input");

input.addEventListener("input",function(){
    // console.log(input.value);
   var matching= data.filter(function(e){
        return  e.name.startsWith(input.value)
    })
    // console.log(matching);
    var newperson="";
    matching.forEach(function(elem){
        newperson+=`  <div class="person">
       <div class="img">
           <img src="${elem.src}">
       </div>
       <h4>${elem.name}</h4>`
   })
   document.querySelector('.people').innerHTML=newperson;

})
