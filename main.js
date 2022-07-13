//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.values(person3)[i])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = function(num=1){
        console.log(`${name} is ${age} years old`);
        return age = age + num
    }
}

let person1 = new Person('James', 25)
let person2 = new Person('Scott', 45)

console.log(person1.printInfo())
console.log(person1.printInfo())

console.log(person2.printInfo(3))
console.log(person2.printInfo(3))

// Use an arrow to create the printInfo method

function Persons(name, age){
    this.name = name;
    this.age = age;

    const printInfo = (num) => {
        console.log(`${this.name} is ${this.age} years old`);
        return age + num
    }
}

// const newPrintInfo = (num) => {
//     console.log(`${this.name} is ${this.age} years old`);
//     return age + num
// }

let person4 = new Persons('Jenn', 23)
console.log(person4.printInfo(2))

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const words =  (i) => {
    return new Promise( (resolve, reject) => {
        if(i.length < 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

words('steven')

.then( (result) => {
    console.log('Small Number')
} )
.catch( (error) => {
    console.log('Big word')
})