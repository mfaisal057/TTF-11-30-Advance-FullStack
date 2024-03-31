
var teacher ="vikas";
function fun(){
    var teacher="puneet";
    console.log(subject);
     subject="js"
    console.log(teacher);
}
function gun(){
    subject="java"
    var student ="ramesh";
    console.log(student);
    console.log(subject);
}
fun();
gun();
console.log(teacher);
// console.log(student);
console.log(subject);

//scopes - formatted variables - let var const 

/*
teacher - global 
l3 - fun - variable - scope - global scope
fun ka scope -
teacher - fun 
l8 - gun - global
gun ka scope 
student - gun



executiuon phase- 
l4 - teacher - fun ka scope - value - teacher = puneet
l6 -




*/