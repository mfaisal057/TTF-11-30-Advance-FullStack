

class ParentClass{
    className;
    constructor(name){
        this.className=name;
    }

    testing(){
        return "test";
    }
}

class ChildClass extends ParentClass{

    // testing(){
    //     // console.log("vikas chaudhary"+super.testing());
    //     return "hello world";
    // }



}

let child = new ChildClass("puneet")
console.log(child.testing());
