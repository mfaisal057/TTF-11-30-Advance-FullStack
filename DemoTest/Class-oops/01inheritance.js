// // let emp1={
// //     firsname:"vikas",
// //     lname:"chaudhary",
// //     age:27,

// //     task:function sometask(){
// //         console.log("task");
// //     }
// // }
// // let emp2={
// //     firsname:"vikas",
// //     lname:"chaudhary",
// //     age:27,

// //     task:function sometask(){
// //         console.log("task");
// //     }
// // }
// // let emp3={
// //     firsname:"vikas",
// //     lname:"chaudhary",
// //     age:27,

// //     task:function sometask(){
// //         console.log("task");
// //     }
// // }

// //class - blueprint , protytpe , 

// //syntax


// class DiceEmployee{
//     firstName;
//     lastName;
//     age;
//     constructor(fname,lname,age)
//     {
//        this.firstName=fname;
//        this.lastName=lname;
//        this.age=age;


//     }
//     task(){
//         console.log("task");
//     }
    

// }

// let emp1= new DiceEmployee("vikas","chaudhary",27)
// let emp2= new DiceEmployee("puneet","malik",30);

// console.log(emp1);
// console.log(emp2);




class ParentClass{
    className="ParentClass";
    getClassName(){
        return this.className;
    }
}

// class ChildClass {
//     className="ParentClass";
//     getClassName(){
//         return this.className;
//     }

// }

class ChildClass extends ParentClass{

}

let parent= new ParentClass()
console.log(parent);

let child= new ChildClass();
console.log(child);

console.log(child.getClassName());
console.log(child.className);





























