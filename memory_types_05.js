/*

        bascially there are two types of memory in javascript, since it is a modern language
        so here we don't have delete variable which are of no use i.e garbage collection is done automatically.
        memory types:
        1. Stack memory : all primitive data types fall under this section 
                          eg - string, number, boolean
                         stack memory follwos call by value i.e it creates a copy when 
                         we create another variable referring to an existing variable.
                         So, changing ones value won't effect another one.
                         
        2. Heap Memory : all non-primitive data types fall under this section 
                          eg - functions, objects
                         heap memory follwos call by reference i.e it points the same variable when 
                         we create another variable referring to an existing variable.
                         So, changing ones value effects another one.

*/

//stack memory
let myName = "Saad"
let newName = myName

console.log(`before change, the value of myName is ${myName} & newName is ${newName}`);

newName = "Kabir"
console.log(`after change, the value of myName is ${myName} & newName is ${newName} `);

//heap memory
let player1 = {
    exp : 79,
    kd : 5.69
}

let player2 = player1
console.log(`before change, the value of player1.kd is ${player1.kd} & player2.kd is ${player2.kd} `);

player2.kd = 6.69
console.log(`after change, the value of player1.kd is ${player1.kd} & player2.kd is ${player2.kd} `);

