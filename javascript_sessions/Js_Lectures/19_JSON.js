//JSON-->JAVASCRIPT OBJECT NOTATION 

// json --> used to send the data form ui to server side 

// form your json 

// your dynamic testdata is stroed in json
//json file will have extension --> json 


let user = {
    name: "siddhant",
    lastname: "gadakh"
}

//------------------------------------------------------------------
/**
 * json example 
 * 
 * user ={
    "name":"siddhant",
    "lastname":"gadakh"
}
 */


// conversion --> 
// json to object  --- .parse()
//object to json  --> stringfy()

let person = `{
"userid":"01",
"name":"siddhant"
}`
console.log( typeof person)
//.parse --> will convert your json into object  
let object = JSON.parse(person)

console.log(object) //{ userid: '01', name: 'siddhant' }
console.log(typeof object)


let person2 = `{
"name":"amol"
}`


let object2 = JSON.parse(person2)
console.log(object2)



let user1 = {
    name: "siddhant",
    lastname: "gadakh"
}

console.log(typeof user1)

let json1 = JSON.stringify(user1)

console.log(json1)
console.log(typeof json1)

//

let detail = {
    name:"siddhant",
    email:"test123@gamil.com",
    country:"india",
    islogged:false,
    age:25
}



// 
let mdetail = JSON.stringify(detail,["name","email","country"])

console.log(mdetail)