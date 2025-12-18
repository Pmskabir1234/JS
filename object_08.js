//non-singleton declaration
const sym = Symbol()
const jsUser = {
        id:'1001',
        name:'saad',
        age: 21,
        isLoggedIn: true,
        [sym]:'123abc'      //this the way to add symbol inside object
}

delete(jsUser.age)      //to delete any element or method
console.log(jsUser);


console.log(jsUser.id);
jsUser.greet = function(){
    console.log(`Hi ${this.name}, welcome to js!`)
}
jsUser.greet()

const anotherObject = {}
anotherObject.skills = ['python','js','ml']

anotherObject.greet = function(){
    console.log(`Hello ${jsUser.name}, you have ${this.skills.toString()} skills`);
    
}
anotherObject.greet()
// const jsUser2 = new Object() //singleton declaration 
