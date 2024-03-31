function printNumber(num) {
    console.log(num);
    console.log("i am inside printnumber function")
}
function iterateNumbers(callback) {
    for (let i = 1; i <= 10; ++i) {
        console.log("vikas");
        callback(i);
    }
}
iterateNumbers(printNumber);
console.log("dice");
console.log("academy");


