// Destructuring

// With Arrays

let studentArray = ["Andrew", "Claudia", "Mei"]

// let andrew = studentArray[0]
// let claudia = studentArray[1]
// let mei = studentArray[2]

// let [andrew, clauida, mei] = studentArray
let [student1, , student2] = studentArray

// With Objects

let studentObj = {name: 'Adam', grade: 12, section: 4}

let {name, grade, section} = studentObj
// variable MUST EXACTLY match the keys in the object

function studentHtml({name, grade, section}){
   return  `<div>
        <p>Name: ${name}</p>
        <p>Grade: ${grade}</p>
        <p>Section: ${section}</p>
    </div>
    `
}

let firstName = "Matt"
let currentSection = 4

let configObj = {
    method: 'POST',
    headers: "",
    body: JSON.stringify({
        firstName,
        currentSection
    })
}

// Spread Operator
const initialState = {
    loggedIn: false,
    toys: []
}

let state = {...initialState}  //make a copy

state = {
    ...state,
     toys: ["Buzz", "Woody"]
    }
// console.log(state)

state = {
    ...state,
    loggedIn: true
}
// console.log(state)

state = {
    ...state,
    username: "Jenn"
}
// console.log(state)
studentArray = ["Kamrin", ...studentArray]

// Arrow Functions

// inherently anonymous

// function add2(n){
//     return n+2
// }

const add2 = (n) => {
    return n+2
} // if you use brackets, must include RETURN

const minus2 = (n) => n - 2

const resToJson = (res) => res.json()

// .fetch()
//     .then(resToJson)



// CLASS SYNTAX

class Pet{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    bark(){
        console.log(`Woof Woof, my name is ${this.name}`)
    }

    // set birthday(date){
    //     this.age
    // }
}

class Dog extends Pet{
    constructor(name,age,breed,favToy){
        super(name,age)
        this.breed = breed
        this.favToy = favToy
    }

    havePuppy(name){
        let puppy = new Dog(name, 0, this.breed, null)
        puppy.whoIsMom = () => {
            console.log(`My mom is ${this.name}`)
        }
        return puppy
    }
}

// ARROW Functions allow us to bind this to the context where it is defined


// let teacher1 = {
//     name: "Jenn"
// }

// let teacher2 = {
//     name: "Cernan"
// }

// function sayName(){
//     console.log(this.name)
// }

