

 var people=document.querySelector(".people")

var data=[
    {name:"puneeta",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"},
    {name:"puneet",src:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"ramesh",src:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"raghav",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"raghvi",src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"sundarKanya",src:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"}
]

var person="";
data.forEach(function(elem){
person+=`  <div class="person">
<div class="img">
    <img src="${elem.src}">
</div>
<h3>${elem.name}</h3>
</div>`


})
people.innerHTML=person;



var input =document.querySelector("input")
var newperson="";
input.addEventListener("input",function(){
    var matchingdata=data.filter(function(elem){
        return elem.name.startsWith(input.value)
    })
    // console.log(matchingdata);
    matchingdata.forEach(function(elem){
        newperson+=`<div class="person">
        <div class="img">
            <img src="${elem.src}">
        </div>
        <h3>${elem.name}</h3>
        </div>`
    })
    people.innerHTML=newperson;


})












