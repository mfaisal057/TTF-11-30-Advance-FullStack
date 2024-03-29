
class ParentClass{
    className;
    
    constructor(name){
        this.className=name;
    }
}

class ChildClass extends ParentClass{
    firstName;

    constructor(name){
        super(name)
        
        this.firstName=name;
    }
   
}


let child = new ChildClass("puneet")
console.log(child.firstName);
console.log(child.className);

// let child = new ChildClass("testing");
// console.log(child);


// cons inherit
//cons override

//child - parent =- data - super ()

// let p1= new ParentClass("vikas")
// console.log(p1.firstName);
