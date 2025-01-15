
// object -- > its a descriptive data type which is used to store value in key value pair 
// object is a non primitive datatype which allows us to group raleted data or functionalty 

let personaldetail = {
    // key      value 
    firstName: "siddhant", // this is property
    lastName: "gadakh",
    phone_no: 7020400749,
}

// object have hidden property called as a  porototype 

// datatype perfrom 4 operation --> 
// way 1 dot notation-->
// way 2 barcket notation-->

//retrive  -->

//dot noation 

console.log(personaldetail.firstName)

// barcket notation

console.log(personaldetail["firstName"])


// update  -->
//dot noation 

personaldetail.firstName="sid"

// barcket notation
personaldetail["lastName"] ="last"

console.log(personaldetail)
// add     -->
//dot noation 
personaldetail.age=24
// barcket notation
personaldetail["birthdate"]="11111111"

console.log(personaldetail)
//delete  -->


delete personaldetail.age


delete personaldetail["birthdate"]


console.log(personaldetail)


//-----------------------------------------------------------

let person = {
    Name:"siddhant gadakh",
    age:25,
    experinece:4,
    position:"software engineer",
    skills:["js","react","cypress","py","playwright"]
}

// retrive --> 

//dot --> 
console.log(person.Name)

console.log(person["Name"])

// update --> 

person.Name="Siddhant Arjun Gadadkh"

console.log(person)

// bracket 

person["Name"]="Siddhant Arjun Gadakh"
console.log(person)

//---------- add 

person.hobbies ="chess"

console.log(person)

person["hobbie1"]="cricket"

console.log(person)


//----------delete 

delete person.hobbie1

console.log(person)

delete person["hobbies"]

console.log(person)

/**
 * 
 * 
 * {
  Name: 'Siddhant Arjun Gadakh',
  age: 25,
  experinece: 4,
  position: 'software engineer',
  skills: [ 'js', 'react', 'cypress', 'py', 'playwright' ]
}

 */


person.skills.push("github")

console.log(person)


//----------------------------
 
console.log(person.skills[2] ) // [ 'js', 'react', 'cypress', 'py', 'playwright' ]


console.log(person["skills"][2] )



// how to use loop in object 
let array = [1,2,3,4,5,6]
//array loop -->

for(let i =0;i<array.length;i++){
    console.log(array[i])
}
/**
 *  {
  Name: 'Siddhant Arjun Gadakh',
  age: 25,
  experinece: 4,
  position: 'software engineer',
  skills: [ 'js', 'react', 'cypress', 'py', 'playwright' ]
}
 */

// object -- >

// console.log(person["Name"])

for(let i in person){
// console.log(i)// to print the keys 
// console.log(person[i]) // to print values 
console.log(`${i} : ${person[i]}`)
}


//---------------------------------------------------------------------------------------





const profiles = [
    { firstName: "Vihaan", lastName: "Mehta", age: 28, experience: 6, skills: ["TypeScript", "CI/CD"], position: "Automation Tester" },
    { firstName: "Rohan", lastName: "Joshi", age: 29, experience: 11, skills: ["TypeScript", "JavaScript", "Cypress", "Docker"], position: "Technical Lead" },
    { firstName: "Vihaan", lastName: "Deshmukh", age: 32, experience: 1, skills: ["Python", "TypeScript"], position: "Software Engineer" },
    { firstName: "Ishaan", lastName: "Pandey", age: 31, experience: 14, skills: ["Python", "Cypress"], position: "Systems Engineer" },
    { firstName: "Ishaan", lastName: "Deshmukh", age: 25, experience: 1, skills: ["Java", "Playwright", "JavaScript", "SQL"], position: "Systems Engineer" },
    { firstName: "Rohan", lastName: "Joshi", age: 33, experience: 3, skills: ["JavaScript", "Java", "Docker", "TypeScript"], position: "Full-Stack Developer" },
    { firstName: "Pranav", lastName: "Joshi", age: 24, experience: 2, skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"], position: "Data Analyst" },
    { firstName: "Rohan", lastName: "Nayak", age: 24, experience: 10, skills: ["JavaScript", "GitHub Actions", "Playwright"], position: "Backend Developer" },
    { firstName: "Arjun", lastName: "Nayak", age: 36, experience: 4, skills: ["Java", "Playwright", "Docker"], position: "Systems Engineer" },
    { firstName: "Vikram", lastName: "Joshi", age: 34, experience: 1, skills: ["Python", "GitHub Actions"], position: "Full-Stack Developer" }
  ];


profiles.forEach((el,index,arr)=>{
console.log(`${el.firstName} ${el.lastName}`)
}
)
/**
 * 
Vihaan Mehta
Rohan Joshi
Vihaan Deshmukh
Ishaan Pandey
Ishaan Deshmukh
Rohan Joshi
Pranav Joshi
Rohan Nayak
Arjun Nayak
 */

// map , filter , foreach, 


let great30=profiles.filter((el,index,arr)=>{
    return el.age>30
})

console.log(great30)



//-----------------------------------------------------------------------------------------------------------------


let str = "my name is siddhant "

//output ==> 

    // ym eman si tnahddis

    //tnahddis si eman ym

    //siddhant is name my 



















