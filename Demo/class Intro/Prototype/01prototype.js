
//array

let array=[]
console.log(array);

console.log(array.__proto__.__proto__.__proto__);

//typeof array object

//Object

let object={}
console.log(object);
console.log(object.__proto__);



//primitve types number boolean string

let number=0;
console.log(number);
console.log(number.__proto__);  //number class

// primitive types doesnt have object ?
//js checks number.tofix()- temp object creates of number class -autoboxing
 //boolean

 let boolean=true;
 console.log(boolean);
 console.log(boolean.__proto__);


 //string
 let str="vikas";
 console.log(str);
 console.log(str.__proto__);


//  let num;
//  console.log(num);
//  console.log(num.__proto__); //error dont have any object related to undefiend 

//  let num2=null;
//  console.log(num2);
//  console.log(num2.__proto__); //error

 let num3=10n;
 console.log(num3);
 console.log(num3.__proto__);

 //symbol

 let sym= Symbol("id")
 console.log(sym);
 console.log(sym.__proto__);
 





