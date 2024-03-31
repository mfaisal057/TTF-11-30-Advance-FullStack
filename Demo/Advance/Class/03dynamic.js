//constuctor


class Employee{
    firstName="vikas"; //variable-property
    lastName="chaudhary";


    //methods

    // name=function(){

    // }
    constructor(fname,lname){
        console.log("cons called");
        console.log(fname,lname);  //runs only one time in a class, object creation k baad hi chalega
        this.firstName=fname;
        this.lastName=lname;
    }

    GetFullName(){
        return this.firstName+" "+this.lastName;

    }

}

let emp1= new Employee("puneet","malik");


//propert deosnt exit - bydefault creates
