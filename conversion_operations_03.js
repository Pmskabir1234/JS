//this is basically converting data type from one to another
let a = "23"
 console.log(typeof a);


a = Number(a)
console.log(typeof a);


let b = "23abc"
console.log(`the type of ${b} is ${typeof b}`);

//notice that NaN which stands for Not a Number is also belong to Number data type
b = Number(b)
console.log(`the type of ${b} is ${typeof b}`);


//notice that null gets converted to 0 in number
let c = null
console.log(`the type of ${c} is ${typeof c} berfore conversion`);

c = Number(c)
console.log(`after conversion the type of ${c} is ${typeof c}`);


//notice in boolean 1 => true & 0 => false , empty string => false & anything else => true

let nothing = ""
let some = " "

console.log(Boolean(nothing), Boolean(some));
