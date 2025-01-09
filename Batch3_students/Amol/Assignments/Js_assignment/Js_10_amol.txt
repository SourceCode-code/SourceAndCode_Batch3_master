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
  let arr =[]
  // Declare an array with more than 5 number of elements
  let arr1 = ["Amol","Kantilal","Jadhav",24,9767004310]
  // Find the length of your array
  console.log(arr1.length)
  // Get the first item, the middle item and the last item of the array
  console.log(arr1[0])
  console.log(arr1[arr1.length/2])
  console.log(arr1[arr.length-1])
  // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
  let arr2 = ["Amol",true,undefined,24,null] 
  // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
   let companies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
  // Print the array using console.log()
   console.log(companies)
  // Print the number of companies in the array
    console.log(companies.length)
  // Print the first company, middle and last company
console.log(companies[0])
console.log(companies[companies.length/2])
console.log(companies[companies.length-1])

  // Print out each company
  for(let i=0;i<=companies.length;i++){
    console.log(companies[i])
  }
  // Change each company name to uppercase one by one and print them out
   for(let i=0;i<=companies.length-1;i++){
    console.log("UPPERCASE",companies[i].toUpperCase())
  }
  // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
  console.log(`${companies.join(",")}are big IT companies.`)
  // Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
  Cname= "Amazon"
  let check = companies.includes(Cname)
  if(check){
    console.log(`${Cname} company present in this array`)
  }
 else{
    console.log(`${Cname} company not present in this array`)
 }
      
    
  // Filter out companies which have more than one 'o' without using the filter method
  count = 0
  for(let i=0;i<=companies.length-1;i++){
if(companies[i].includes("o")){
  console.log(companies[i])
}
  }
  // Sort the array using sort() method
  console.log("Sorted",companies.sort())
  // Reverse the array using reverse() method
  console.log(companies.reverse())
  // Slice out the first 3 companies from the array
  let first3 = companies.slice(0,3)
  console.log(first3)
  // Slice out the last 3 companies from the array
  let last3 = companies.slice(4,8)
  console.log(last3)
  // Slice out the middle IT company or companies from the array
  let middle= companies.slice(3,4)
  console.log(middle)
  // Remove the first IT company from the array
  companies.shift()
  console.log(companies)
  // Remove the middle IT company or companies from the array
  console.log("middle remove",companies.splice(3,1))
  // Remove the last IT company from the array 
companies.pop()
console.log(companies)
  // Remove all IT companies
  companies=[]
console.log("remove:-",companies)
  // Exercise: Level 2
  
  // First remove all the punctuations and change the string to an array and count the number of words in the array:
  let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python'
  let check1= text.replace(/,/g,"")
console.log('remove all the punctuations',check1.split(" "))
console.log('total words',check1.split(" ").length)
  // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  // 13
  
  // In the following shopping cart add, remove, edit items:
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  // add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart)
  // add Sugar at the end of your shopping cart if it has not been already added
//   shoppingCart.push("Sugar")
//   console.log(shoppingCart)
  // remove 'Honey' if you are allergic to honey
shoppingCart.pop()
console.log(shoppingCart)
  // modify 'Tea' to 'Green Tea'
shoppingCart[3]="Green Tea"
console.log(shoppingCart)
  // In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
  countryName= 'Ethiopia'
  let check3 =countries.includes(countryName)
  if(check){
    console.log(`${countryName} countries present in this array`)
  }
 else{
    console.log(`${countryName} countries not present in this array`)
 }

  // In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
  webb='Sass'
  let check4 =webTechs.includes(webb)
  if(check){
    console.log(`${webb}  present in this array`)
  }
 else{
    console.log(`${webb}  not present in this array`)
 }
  
  // Concatenate the following two variables and store it in a fullStack variable:
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB']
  let fullStack= frontEnd.concat(backEnd)
  console.log(fullStack)
  // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
  
  // Exercise: Level 3
  
  // The following is an array of 10 students' ages:
   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  // Sort the array and find the min and max age
    console.log(Math.max(...ages))
  // Find the median age(one middle item or two middle items divided by two)
    console.log(ages[ages.length/2])
  // Find the average age(all items divided by number of items)
  let sum1=0
for(let i=0;i<=ages.length-1;i++){
  sum1=sum1+ages[i]
}
let check5= sum1/ages.length
console.log(check5)

// Find the range of the ages (max minus min)
  let max = Math.max(...ages)
  let min = Math.min(...ages)
  console.log(max-min)

// Compare the value of (min - average) and (max - average), use abs() method
let finalcheck = (min-check5/max-check5)
console.log(Math.abs(finalcheck))

  //Slice the first ten countries from the countries array
let firstten = countries.slice(0,10)
console.log(firstten)
  // Find the middle country(ies) in the countries array
  console.log(Math.round(countries.length/2))
  console.log(countries[6])
  // Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
  const countries1 = [
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

  fisrthalf=[]
  secondhalf=[]
  countries1.push("India")
  for(let i=0;i<=countries1.length-1;i++){
    if(i>=6){
        fisrthalf.push(countries1[i])
    }
    else{
        secondhalf.push(countries1[i])
    }
  }
  console.log("Firsthalf",fisrthalf)
  console.log("secondhalf",secondhalf)