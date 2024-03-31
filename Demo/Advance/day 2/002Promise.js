 //syntaax
//   let promise=new Promise(function(resolve,reject){


//   })

  let promise=new Promise(function(resolve,reject){
    //  resolve("resolved");
     reject("rejected");
    //hidden props



  })
//   console.log(promise);

//thrn block resolve

// promise.then((data)=>{
//     console.log(data);
// })

// promise.catch((error)=>{
//     console.log(error);
// })


//chaining system

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
