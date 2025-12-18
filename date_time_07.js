let myDate = new Date()
// console.log(myDate);
// console.log(`toString: ${myDate.toString()}`);
// console.log(`toDateString: ${myDate.toDateString()}`);
// console.log(`toLocaleString: ${myDate.toLocaleString()}`);
// console.log(`toLocaleDateString: ${myDate.toLocaleDateString()}`);
// console.log(`toJSON: ${myDate.toJSON()}`);


//to set date : 01-01-2026
let newDate = new Date(2026,0,1)
// console.log(newDate.toLocaleDateString());

// to use mm-dd-yyyy format
let customDate = new Date("01-31-2026")
console.log(customDate.toDateString());
console.log(customDate.getDay());