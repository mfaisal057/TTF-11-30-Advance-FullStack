

// let empid=99;
// let empname="vikas";
// function empkaam(){
//     console.log("some task");
// }


class DiceEmployees{
    firstName="puneet";
    lastName="chaudhary";
    constructor(fname,lname,salary){
        // console.log("m chal gya");
        this.firstName=fname;
        this.lastName=lname;
        this.salary=salary;
    }
    salary=20000;
    task(){
        console.log("some task");
    }
}

let emp1= new DiceEmployees("puneet","chaudhary",20000)
console.log(emp1);
let emp2 = new DiceEmployees("vikas","chaudhary",10000)
console.log(emp2);

console.log(DiceEmployees);





