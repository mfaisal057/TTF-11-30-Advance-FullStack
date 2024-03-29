//rest and spread op

//spread - faila dena 
 //rest = bind
 //...



//  function add(a,b){
//     console.log(a+b);
//  }

//  add(10,20,34,434,55,66,l)


function add(...args){
    console.log(args);

    // let sum=0;
    // for(let i=0;i<args.length;i++){
    //     sum+=args[i]
    // }
    // console.log(sum);
}

add(10,20,30,40,50);

// let arr1=[10,20,30]
// let arr2=[...arr1,20,30]
// console.log(arr2);
// let arr3=[10,20,...arr2]

// console.log(arr3);



//...
// let arr1=[10,20,30]
// let arr2=[...arr1]
// console.log(arr1);
// console.log(arr2);

// let arr1=[10,20,30]
// let arr2=[10,20,...arr1]
// console.log(arr2);



// let arr1=[10,20,30]
// let arr2=[...arr1]
// arr1.pop()
// console.log(arr1);
// console.log(arr2);


//hw - 



// function add(...args){
//     console.log(args);
//     // console.log(a+b);
// }

// add(10,20,30,40)


let obj1={
    name:"vikas",
    age:27
}

let obj2={...obj1}
console.log(obj1);
console.log(obj2);
obj1.marks=75;
console.log(obj1);
console.log(obj2);
console.log("----------");
let obj3=obj1;
obj1.sayHello=function fun(){
    console.log("hello world");
}
console.log(obj3);

//hw- 5 ways to copy an object









