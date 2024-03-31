function test(callback){
    // console.log(callback);
    callback();

}

test(()=>{
    console.log("test 1");

    test(()=>{
        console.log("test 2")
        test(()=>{
            console.log("test 3")
            test(()=>{
                console.log("test 4")
        
            })
    
        })

    })
})