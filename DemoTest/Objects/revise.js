

class ParentClass{

    className="Parent";
    constructor(){
        console.log("i am a bydefault cons ");
    }
    getClassName(){
    return this.className;
    }

    static firstName="vikas";

}

class ChildClass extends ParentClass{

    fun(){
        // super();
        console.log(ParentClass.firstName)
    }


}

// console.log(super.className);
let child = new ChildClass()
console.log(child);
console.log(child.fun());

