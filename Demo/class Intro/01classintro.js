
//syntax


// class ClassName{
//     firname="vikas";
//     lname="chaudhary";

// }


let Employee=class {
    // firsname="vikas";
    // lname="chaudhary";
    constructor(fname,lname){
        console.log("cons called ");
        this.firsname=fname;
        this.lname=lname;
    }

    getFullName(){
        return this.firsname+" "+this.lname;

    }
}


// let emp1= new Employee();
// console.log(emp1);


let emp1= new Employee("puneet","chaudhary");
console.log(emp1);

let emp2= new Employee("ashish","rathore");
console.log(emp2);

let emp3= new Employee("raj","ojha");
console.log(emp3);







