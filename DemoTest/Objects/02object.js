

//object clone merge copy
//prop name limitations 
let obj={
    _firstname:"vikas",
    $firstname:"vikas",
    // 1firstname:
    firstname1:"vikas",
    first1name:"vikas",
    first$name:"vikas",
    // first name :"vikas"
    let :"let",
    var :"var",
    const:"const",
    claas:"class",
    funtion:"function",
    assignL:"assign",
    // @name:""
    // name@:"vikas"

}


//copy merge clone

let object1={

    name:"vikas",
}

let object2={...object1};
console.log(object1);
console.log(object2);
console.log(object1===object2);

// method 2 Object.assign

let object3=Object.assign({},object1);
console.log(object1);
console.log(object3);
console.log(object1===object3);

//method 3 - merge 
// let object4={};

// let rv=Object.assign(object4,object1)
// console.log(rv);
// console.log(object4===rv);



let object4={}
console.log(Object.assign(object4,object1));
console.log(object4===object1);


//structure clone
// console.log("*******************8888");
// let object5={}
// console.log(structuredClone(object5,object1))

let object6=structuredClone(object1)

console.log(object6);
console.log(object6===object1);


//for loop


let object7={
    a:10,
    b:20,
    c:30,
}

let object8={};
for(const key in object7){
    object8[key]=object7[key]
}

console.log(object8);

console.log(object8===object7);

let obj9={
    x:100,
    y:500,
}
let obj10={}

let rv=Object.assign(obj9,obj10)
console.log(rv);
console.log(rv===obj9);


let obj11={
    aa:100,
    bb:200,
    cc:300,
    name:"deepak"
}

let obj12=Object.assign({},obj11,{name:"vikas"},{age:27})
console.log(obj12);
console.log(obj11===obj12);


let obj13={xxxxx:"yyyyy"}
let rv2=Object.assign(obj12,obj13,{age:27});
console.log(rv2);
console.log(rv2===obj12);











