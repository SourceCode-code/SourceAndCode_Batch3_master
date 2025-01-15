
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
