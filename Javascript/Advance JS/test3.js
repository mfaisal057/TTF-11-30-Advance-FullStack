
// console.log(age);
// let age=37;
// // function fun(){

// // }

var age=28;
console.log("global "+age);
function fun(){
    console.log("inside 1st line"+age);
     age=27;
    console.log("inside fun"+age);
}
fun();
/*
age = global
fun-global
age =fun ka scope

executiuon phase 
age =28;
10 age retrieve - fun k scope 
age =27
age = 


*/
// var name="vikas";
// {
//      var name="puneet";

// }

// console.log(name);
