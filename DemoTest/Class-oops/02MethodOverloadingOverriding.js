

// class Area{

//     area(side,side2){
//         return side+side2;

//     }

//     area1(length,breadth){
//         return length*breadth;
//     }
// }

// let ar= new Area();
// console.log(ar.area(5,5));



//method overriding - property overriding


class ParentClass{
    className="ParentClass";
    getClassName(){
        return this.className;
    }
}


class ChildClass extends ParentClass{
    className="Bhavishya";
    getClassName(){
        return "sukanya";
    }

}

let child = new ChildClass();
console.log(child.className);
console.log(child.getClassName());



// method override 






