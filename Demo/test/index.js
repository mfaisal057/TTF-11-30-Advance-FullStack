

// let num=8465;

// let nod=0;
// let temp=num;
// while(temp!=0){
//     temp=Math.floor(temp/10)
//     nod++;
// }

// // console.log(nod);

// // let div=Math.pow(10,nod-1)
// // // console.log(div);


// // while(num!=0){
// //     let fd=Math.floor(num/div);
// //     console.log(fd);
   
// //     num=num%div;
// //     div=Math.floor(div/10);
    
 

// // }










let num=44678
let k=122;
let temp=num;

let nod=0


while(temp!=0){
    temp=Math.floor(temp/10);
    nod++;
}
k=k%nod;
k=k+nod;



// 78*1000+786=78786


let mult=1;
let div=1;


for(let i=1;i<=nod;i++){
    if(i<=k){
        div=div*10;
    }else{
        mult=mult*10;
    }
 
    

    
}
let rot=0;

let ld=num%div;
// console.log(ld);
let fn=Math.floor(num/div)
// console.log(fn);
rot+=ld*mult+fn;
console.log(rot);