// let Employee=class {
//     constructor(fname,lname){
//         this.firstname=fname;
//         this.lastname=lname;
//     }

//     getFullName(){
//         return this.firstname+" "+this.lastname;
//     }

// }

// //anonymous class and function expression

// let emp1= new Employee("vikas","chaudhaey");
// console.log(emp1);




//getter and setter
class Testing {
    className = "Testing";

    get ClassName() {
        return this.className;
    }

    set setClassName(value) {
        console.log(value);

    }
}

let test = new Testing();
test.setClassName = "testing1"
console.log(test.ClassName);


//computed name - not in use

