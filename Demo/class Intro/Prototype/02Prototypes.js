//class banne k baad agar kuch extra prop add krne ho to
//to add value at run time

class Employee{

}

Employee.prototype.firstName="vikas";
Employee.prototype.getFirstName=function (){
    return this.firstName;
}

let emp= new Employee();
console.log(emp.firstName);
console.log(emp.getFirstName());

///native class k andrr bhi update krskte ho

//array

Array.prototype.firstname="vikash";
let arr=[];
console.log(arr);

