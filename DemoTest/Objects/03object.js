// let object1={
//     a:10,
//     b:20,
//     c:30,
//     name:"vikas",
// }
// let object2={age:27}
// let rv=Object.assign(object1,object2)
// console.log(rv);
// console.log(object1===rv);
// console.log(object1===object2);
// console.log(object2);
// console.log(object1);































// let object2=Object.assign({},object1,{age:27},{name:"deepak"})
// console.log(object2);
// console.log(object1===object2);




//clone merge 

let obj1={
    a:10,
    b:20,
}

//spread op ...
let obj2={...obj1}
console.log(obj2);
console.log(obj1===obj2);


//method 2 - loop

let obj3={
    a:10,
    b:20,
    c:30,
}

let obj4={};

for(const key in obj3){
    obj4[key]=obj3[key]
}

console.log(obj4);
console.log(obj3===obj4);

//method 3 structure clone methid

let obj5=structuredClone(obj3)
console.log(obj5);
console.log(obj5===obj3);


//method 4 Object.assing()


let obj6=Object.assign({},obj3)
console.log(obj6);
console.log(obj6===obj3);

//method Object.assing(sr,dest)

let obj7=Object.assign(obj3)
console.log(obj7);
console.log(obj7===obj3);




