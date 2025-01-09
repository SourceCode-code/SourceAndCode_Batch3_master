// Exercise: Level 1



const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];


// Declare an empty array
let arr = []

// Declare an array with more than 5 number of elements
let arr1 = ["Sonali", "Rajabhau", "Khosle", "Pune", "javascript"]
console.log(arr1)

// Find the length of your array
console.log(arr1.length)

// Get the first item, the middle item and the last item of the array
let firstitem = arr1[0]
let middleitem = arr1[Math.floor(arr1.length / 2)]
let lastitem = arr1[arr1.length - 1]
console.log(firstitem)
console.log(middleitem)
console.log(lastitem)



// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["I", "am", "learning", "javascript", "and", "playwright"]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
let comp = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

let firstcompany = comp[0]
let middlecomp = comp[Math.floor(comp.length / 2)]
let lastcomp = comp[comp.length - 1]
console.log(firstcompany)
console.log(middlecomp)
console.log(lastcomp)


// Print out each company
//let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((el, index, arr) => {
    console.log(el.toUpperCase())
})

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
//let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let str = itCompanies.join()
console.log(str)

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let compname = "Google"
if (itCompanies.includes(compname)) {
    console.log(compname)
} else {
    console.log("company is not found")
}

// Filter out companies which have more than one 'o' without using the filter method
//let filtero=webTechs.every((el,index,arr)=>{
//return el.includes(o<=2)

//console.log(filtero)

// Sort the array using sort() method
console.log(webTechs.sort())

// Reverse the array using reverse() method
console.log(webTechs.reverse())

// Slice out the first 3 companies from the array
let slicecomp = webTechs.slice(0, 3)
console.log(slicecomp)

// Slice out the last 3 companies from the array
let clicecomp = webTechs.slice(4, 7)
console.log(clicecomp)


// Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2)
let middle = itCompanies.slice(middleIndex, middleIndex + 1)
console.log("middle company is", middle)

// Remove the first IT company from the array
webTechs.shift()
console.log(webTechs)

// Remove the middle IT company or companies from the array
let middleIndex1 = Math.floor(itCompanies.length / 2)

itCompanies.splice(middleIndex1, 1)
console.log(itCompanies)



// Remove the last IT company from the array
const webTech1 = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

webTech1.pop()
console.log(webTech1)

// Remove all IT companies
itCompanies = []
console.log(itCompanies)

// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textarr = text.split(" ")
console.log(textarr)
console.log(textarr.length)
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']      // add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
console.log(shoppingCart)

// add Sugar at the end of your shopping cart if it has not been already added
//shoppingCart.push("Sugar")
//console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
shoppingCart.pop()
console.log(shoppingCart)

// modify 'Tea' to 'Green Tea'
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)



// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
//let checkcountry=[]
// for(let i=0;i<countries.length;i++){
//if(countries[i].includes("Ethiopia")){
//   checkcountry.push(countries[i])
//}
//}  console.log(checkcountry)
let checksome = countries.some((el, index, arr) => {
    return el.includes("Ethiopia")
})

console.log(checksome) //true

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
//let webtech=[]
//for(let i=0;i<webTechs.length;i++){
if (webTechs.includes("Sass")) {
    console.log(`Sass is a CSS preprocess`)
}
//webtech[i]
else {
    webTechs.push("Sass")
    console.log(`Sass is added to preprocess`)

}


//}
// Concatenate the following two variables and store it in a fullStack variable:
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
console.log(frontEnd.concat(backEnd))
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]



// Exercise: Level 3

// The following is an array of 10 students' ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(Math.max(...ages))
console.log(Math.min(...ages))

// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)

sum = 0
for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i]

}
let average = sum / ages.length
console.log(average)

// Find the range of the ages (max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

// Slice the first ten countries from the countries array
let countryten = countries.slice(0, 10)
console.log(countryten)

// Find the middle country(ies) in the countries array
let middlecountry = Math.floor(countries.length / 2)
if (countries.length % 2 == 0) {
    console.log("Middle countries:", countries[middlecountry - 1], "and", countries[middlecountry])
}
else {
    console.log("Middle country:", countries[middlecountry])
}
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
let firstHalf = countries.slice(0, middlecountry + (countries.length % 2))
let secondHalf = countries.slice(middlecountry + (countries.length % 2))
if (secondHalf % 2 != 0) {
    console.log(secondHalf.push("India"))
}

console.log("firsthalf", firstHalf)
console.log("second half", secondHalf)
