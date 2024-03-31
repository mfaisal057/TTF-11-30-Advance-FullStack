/*
2 types of erros - full crash and 2nd can handled


*/

// let a =10/b;  //ref error
// console.log(a);


// try{
//     // let b =10;
//     let a =10/b;  //ref error
// console.log(a);

// }catch(error){
//     console.log(error);
//     console.log(error.message);
//     console.log(error.name);

// }
// console.log("after try catch");


try{
    // let b =10;
    let a =10/b;  //ref error
console.log(a);

}catch(error){
    console.log(error);
    console.log(error.message);
    console.log(error.name);

} finally{
    console.log("m hmesha chalunga");
}
console.log("after try catch");