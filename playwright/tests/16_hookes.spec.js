const { test, expect } = require("@playwright/test")

//before -- before all test (at start) --->all logins 
//after -- after all  test  (at the end) --> reports 
//test1
//test2
//test3
//beforeEach  -- runs before every testcase
//AfterEach -- runs after every testcase


// //before -- before all test (at start) --->all logins 
//beforeEach  -- runs before every testcase
//test1
//AfterEach -- runs after every testcase
//beforeEach  -- runs before every testcase
//test2
////AfterEach -- runs after every testcase
//after

test.beforeAll(async () => {
    console.log("hey i run at the first")
})

test.beforeEach(async () => {
    console.log("hey i run before every testcase")
})

test("hookes", async ({ page }) => {
    console.log("test 1")
})

test("hookes2", async ({ page }) => {
    console.log("test 2")
})


test.afterEach(async () => {
    console.log("hey i run after every testcase")
})

test.afterAll(async () => {
    console.log("hey i run at the end")
})
