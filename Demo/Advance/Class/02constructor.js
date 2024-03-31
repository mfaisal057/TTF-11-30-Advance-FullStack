//constuctor


class Employee{
    firstName="vikas"; //variable-property
    lastName="chaudhary";


    //methods

    // name=function(){

    // }
    constructor(){
        console.log("cons called");  //runs only one time in a class, object creation k baad hi chalega
    }

    GetFullName(){
        return this.firstName+" "+this.lastName;

    }

}

let emp1= new Employee;
console.log(emp1);
console.log(emp1.firstName); //obj level
console.log(Employee.firstName); //class level

