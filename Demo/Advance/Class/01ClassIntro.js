//class syntax
// class ClassName {

// }

// let emp1={
//     firstName:"vikas",
//     lastName:"chaudhary",
//     getFullName:function(){
//         return this.firstName + ' '+this.lastName;
//     }
// }


class Employee{
    firstName="vikas"; //variable-property
    lastName="chaudhary";


    //methods

    // name=function(){

    // }

    GetFullName(){
        return this.firstName+" "+this.lastName;

    }

}


//object , instance 

let emp1=new Employee();
console.log(emp1);
let emp2=new Employee();
console.log(emp2);
//same prop same method - code repear - duplicacy


