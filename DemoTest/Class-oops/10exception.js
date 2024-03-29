// //error - handle
// let b=10;
try{
    let b=-1;
    let a=10/b;
    if(b<=0){
        throw new Error("b ki value negative nahi honi chahye")
    }
console.log(a);

}catch(error){
    console.log(error);
   

}finally{
    console.log("chahe kuch bhi hojaye m jroor chalnga ");
}

//custom error 