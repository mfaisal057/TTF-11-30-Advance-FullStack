

// array and object - 

//syntax 

let obj={
    firstName:"vikas",
    lastName:"chaudhary",
    age:27,
    sayHello:function(){
        console.log("hello "+this.firstName);
    }
}

//access - . []


console.log(obj);
console.log(obj.age);
console.log(obj.firstName);
console.log(obj.sayHello());

//[]
console.log(obj["age"]);

console.log(obj["firstName"]);
console.log(obj["sayHello"]());

//COMPUTED PROERTIRS

let a =10;

let obj2={
    // key:"value",
    // key:a,
    // [a]:"value",
    // a,
    a:a,
}




console.log(obj2);


//property existnace or not

let obj3={
    firstName:"Bhanu",
    lastName:"chaudhary",
    age:27,

}

console.log("firstNamee" in obj3);

//loop i9n object

let obj4={
    firstName:"vikas",
    lastName:"chaudhary",
    age:27,

}
console.log("-----------------");

let c=0;
for(const key in obj ){
    console.log(key,obj3[key]);
    c++;
    
}

console.log(c);

//object cloning merge copy

//5 ways

