//destructing array
let num = [2, 5, 7, 8, 9]
let [num1, num2, num3, num4, num5] = num
console.log(num1, num2, num3, num4, num5)

//skipping elements in destructing array
let nums = [1, 2, 3, 4, 5, 6, 6]
let [, , , nums1, nums2, nums3, nums4] = nums
console.log(nums1, nums2, nums3, nums4)

//neseted array
let fullStack = [
    ["HTML", "CSS", "JS", "React", "Angular"],   // Frontend stack
    ["Node", "Express", "MongoDB", "SQL"]         // Backend stack
]
let [frontend, backend] = fullStack
console.log(frontend, backend)

//destructing specific elements from array
let [[front1, front2, front3, front4], [back1, back2, back3, back4]] = fullStack
console.log(front1, front2, front3, front4, back1, back2, back3, back4)

//skipping elements in array
let numb = [2, 5, 9, 76, 8]
let [numb1, numb2, , , numb4] = numb
console.log(numb1, numb2)
console.log(numb4)

//giving values to unfefined array
let str = ["sonali", "rajabhau", "khosle", undefined, "pune"]
let [name1, name2, name3, name4 = "hello", name5] = str
console.log(name1, name2, name3, name4, name5)

let numa = [1, 2, 3, 4, 5]
let [a, b, ...remaining] = numa
console.log(a, b)
console.log(remaining)

//loop with destructing
let countryCapitalArray = [
    ["India", "Delhi"],
    ["USA", "Washington DC"],
    ["England", "London"]
];

for(let[country,capital]of countryCapitalArray){
      console.log(`${country}:${capital}`)
    }

//destructong of object
    let obj = {
        firstName: "Vihaan",
        lastName: "Mehta",
        age: 28,
        experience: 6,
        skills: ["TypeScript", "CI/CD"],
        position: "Automation Tester"
    };
    

    //destructing object properties with variables
    let{firstName,lastName,age,experience,skills,position}=obj
    console.log(firstName,lastName,age,experience,skills,position)

    //renaming the variables name
    let{firstName:fn,lastName:ln,age:aa,experience:exp,skills:sk}=obj 
    console.log(fn,ln,aa,exp,sk)

    //destructing specified elements from array in object
    let[skill1,skill2]=sk
    console.log(skill1,skill2)

//dot notation -used to accessing object properties by their name
console.log(obj.firstName)    

//bracket notation-used to accessing properties dynamically or it includes special characters
let bracket="position"
console.log(obj[bracket])

//looping in array
//for..in---used to iterate over the keys of object------OBJECT
//for..of--used to itearte over the values of array------ARRAY


for(let key in obj){
    console.log(`${key}`)
    console.log(`${key}:${obj[key]}`)
}

let numbersArray = [10, 20, 30];
for(let value of numbersArray){
    console.log(value)
}

//LOOPS in destructing array

const EXP = [{
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
}, {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
}]


for(const{name,capital,languages,population,flag,currency}of EXP){
    console.log(name,capital,languages,population,flag,currency)
}
const even =[2,4,6,8,10,12,14,16,18,20]

let EVENNUMBERS=[...even]

console.log(EVENNUMBERS)

let odd=[1,3,5,7,9,11,13,15,17,19,21]

let ODD=[...odd]

console.log(ODD)

let wholenumbers=[...EVENNUMBERS,...ODD]

console.log(wholenumbers)
