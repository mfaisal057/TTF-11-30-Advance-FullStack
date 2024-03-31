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
    /*Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    */
  
  }
  let child= new ChildClass("testing"); //undeifned
console.log(child);

//cons also get inherited
//cons overriding
//child-data-parent -use super()