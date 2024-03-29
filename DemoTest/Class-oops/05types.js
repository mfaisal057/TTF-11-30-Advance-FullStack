// class A{}

// class B extends A{

// }

// class C extends B{

// }

// class A{

// }

// class B{

// }
// class C extends A,B{

// }

//

// ACCCESS MODIFIER PUBLIC PVT PROTECTED
//JS PROTECTED 



class Employee{
    firstname;
    lastName;
    #salary=10000;
    #getFullName(){
        return this.firstname+" "+this.lastName;
    }
    test(){
        console.log(this.#salary);
    }
}

let emp1= new Employee();
console.log(emp1.firstname);
// console.log(emp1.getFullName());
// console.log(emp1.salary);
console.log(emp1.test());























