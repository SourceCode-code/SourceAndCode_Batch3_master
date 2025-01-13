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
  let arr=[]
  console.log(arr)

  //let arr1=array()
  //console.log(arr1)

  // Declare an array with more than 5 number of elements
  let number=[1,2,3,4,5]

  // Find the length of your array
  console.log(number.length)
  // Get the first item, the middle item and the last item of the array
  console.log(number[0])
  console.log(number[2])
  console.log(number[4])
  // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
  let mixedDataTypes=["sneha","suresh","anap",26,"married","anapsneha@gmail.com",7887647323,true,"@#$%!&*"]
  console.log(mixedDataTypes.length)
  // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  let itcompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"," Amazon"]
  // Print the array using console.log()
  console.log(itcompanies)
  // Print the number of companies in the array
  console.log(itcompanies.length)
  // Print the first company, middle and last company
  console.log(itcompanies[0])
  console.log(itcompanies[3])
  console.log(itcompanies[6])
  
  // Print out each company
  for(let i=0;i<=itcompanies.length-1;i++){
    console.log(itcompanies[i])
  }
console.log("--------------------------------------")
  itcompanies.forEach((el,index,array)=>{
    console.log(el)
  })

  // Change each company name to uppercase one by one and print them out
  itcompanies.forEach((el,index,array)=>{
    console.log(el.toUpperCase())
  })

  
  // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
  let arr1=["Google", "Microsoft", "Apple", "IBM", "Oracle" ,"and Amazon are big IT companies."]
  console.log(arr1)
  // Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
 

  // Filter out companies which have more than one 'o' without using the filter method
  // let count=0
  // for(let i=0;i<=arr1.length;i++){
  //   if(count<array1[i]){
  //     let b=(array[i].push())
  //     console.log(b)
  //   }
  // }

  // Sort the array using sort() method
  console.log(arr1.sort())
 // let itcompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"," Amazon"]
  let sort=itcompanies.sort()
  
  console.log(sort)

  // Reverse the array using reverse() method
  let reverse=itcompanies.reverse()
  console.log(reverse)
  // Slice out the first 3 companies from the array
  console.log(itcompanies.slice(0,3))
  // Slice out the last 3 companies from the array
  console.log(itcompanies.slice(-3,itcompanies.length))
  // Slice out the middle IT company or companies from the array
  console.log(itcompanies.length/2)
  console.log(itcompanies[3])
  // Remove the first IT company from the array
  console.log(itcompanies.shift())
  
  // Remove the middle IT company or companies from the array
  console.log(itcompanies.splice(3,1))
  // Remove the last IT company from the array
  console.log(itcompanies.pop())
  // Remove all IT companies
  console.log(itcompanies.splice(itcompanies.length))
  
  // Exercise: Level 2
  
  // First remove all the punctuations and change the string to an array and count the number of words in the array:
   let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
 //console.log(words)
   //console.log(words.length)
  // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  // 13
  
  // In the following shopping cart add, remove, edit items:
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  // add 'Meat' in the beginning of your shopping cart if it has not been already added
  shoppingCart.unshift("meat")
  console.log(shoppingCart)
  // add Sugar at the end of your shopping cart if it has not been already added
  shoppingCart.push("sugar")
  console.log(shoppingCart)
  // remove 'Honey' if you are allergic to honey
 console.log (shoppingCart.splice(4,1))
  // modify 'Tea' to 'Green Tea'
  
  shoppingCart[3]="greentea"
  console.log(shoppingCart)
  // In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

  // In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
  
  // Concatenate the following two variables and store it in a fullStack variable:
   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
   const backEnd = ['Node', 'Express', 'MongoDB']
  let fullstack=frontEnd.concat(backEnd)
  console.log(fullstack)
  // console.log(fullStack)
  // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
  
  // Exercise: Level 3
  
  // The following is an array of 10 students' ages:
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  // Sort the array and find the min and max age
  let age1=Math.min(...ages)
  let age2=Math.max(...ages)
  console.log(age1)
  console.log(age2)
  // Find the median age(one middle item or two middle items divided by two)

  // Find the average age(all items divided by number of items)
  // Find the range of the ages (max minus min)
   let average = (Math.abs(age2-age1))
  console.log(average)
  // Compare the value of (min - average) and (max - average), use abs() method
  let coma = (age1-average)/(age2-average)
 console.log(Math.abs(coma))

  // Slice the first ten countries from the countries array
  console.log(countries.splice(0,10))
  // Find the middle country(ies) in the countries array
console.log(countries[6])
  // Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
  let countries1 = countries.slice(0,5)
   let countries2 = countries.slice(6,12)
   console.log(countries1)
   console.log(countries2)