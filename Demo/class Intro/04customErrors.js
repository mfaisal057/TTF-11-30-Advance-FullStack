/*

custom errors


*/


try{
    let b =0;
    if(b<=0){
        throw new Error("value should be greater than zero")

    }
    let a =10/b;
    console.log(a);

}catch(error){
    console.log(error);
    console.log(error.message);

}