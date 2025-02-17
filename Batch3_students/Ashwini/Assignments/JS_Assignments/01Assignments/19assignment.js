// Exercises
// ASSIGNMENT DATA 
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


// Exercises Level 1
//1 Change skills array to JSON using JSON.stringify()

let obj1 = JSON.stringify(skills)
console.log(obj1)
console.log(typeof obj1)

//2 Stringify the age variable

let obj2 = JSON.stringify(age)
console.log(obj2)
console.log(typeof obj2)

//3 Stringify the isMarried variable

let obj3 = JSON.stringify(isMarried)
console.log(obj3)
console.log(typeof obj3)

//4 Stringify the student object

console.log(typeof student)
let obj4 = JSON.stringify(student)
console.log(obj4)
console.log(typeof obj4)

//1 Exercises Level 2
//2 Stringify the students object with only firstName, lastName and skills properties

let obj5 = JSON.stringify(student,["firstName","lastName","skills"])
console.log(obj5)
//console.log(typeof obj5)

// Exercises Level 3
//1 Parse the txt JSON to object.

let obj6 = JSON.parse(txt)
console.log(obj6)
console.log(typeof obj6)

//2 Find the user who has many skills from the variable stored in txt.
let obj7 = JSON.stringify(txt, ["skills[]"])
console.log(obj7)
console.log(typeof obj7)