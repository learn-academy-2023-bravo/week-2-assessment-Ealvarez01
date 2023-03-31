// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
  it("takes an object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
    expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
    expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
  })   
})
// Failing!
//    FAIL  ./code-challenges.test.js
//   divisibleByThree
//   ✕ takes an object as an argument and decides if the number inside it is evenly divisible by three or not

// ● divisibleByThree › takes an object as an argument and decides if the number inside it is evenly divisible by three or not

//   ReferenceError: divisibleByThree is not defined

// Pseudocode:
// input: an object with a number
// output: takes an object as an argument and decides if the number inside it is evenly divisible by three or not

  // input: object1
  // output: '15 is divisible by three'

  // input: object2
  // output: '0 is divisible by three'

  // input: object3
  // output: '-7 is not divisible by three

  // Process:
  // Create a function named divisibleByThree takes an object as an argument and decides if the number inside it is evenly divisible by three or not
  // use modulo operator to determine if the object is evenly divisible by 3 or not by looking at the remainder 

  // if there is no remainder then the number is evenly divisible by 3
  // since there are two different outcomes, use two different conditions with separate outputs
  // using string interpolation to create the statement that will reference the parameters to obtain the values of each number

// FUNCTION

const divisibleByThree = (objNumber) => {
  const { number } = objNumber
  if(number % 3 === 0) {
    return `${number} is divisible by three`
  } 
  else {
    return `${number} is not divisible by three`
  }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalArrays", () =>{
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    expect(capitalArrays(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalArrays(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})
// Failing!
//  FAIL  ./code-challenges.test.js
  // ● Test suite failed to run

  // ReferenceError: capitalArray is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// input: 2 arrays
// output: 2 arrays with words capitalized

// Process:
// Create a function named capitalArrays that takes in an array of words and returns an array with all the words capitalized
// use .join() to keep the words in one array together
// Use .charAt(0) to capitalize the words in the arrays

// FUNCTION
const capitalArrays = (array1) => {
  return array1.join(" ").charAt(0).split(" ")
}
// I'M STUCK HERE! IT KEEPS FAILING
// Failing!
// FAIL  ./code-challenges.test.js
// capitalArrays
//   ✕ takes in an array of words and returns an array with all the words capitalized (2 ms)

// ● capitalArrays › takes in an array of words and returns an array with all the words capitalized

//   expect(received).toEqual(expected) // deep equality

//   - Expected  - 5
//   + Received  + 1

//     Array [
//   -   "Streetlamp",
//   -   "Potato",
//   -   "Teeth",
//   -   "Conclusion",
//   -   "Nephew",
//   +   "s",
//     ]

//     94 | describe("capitalArrays", () =>{
//     95 |   it("takes in an array of words and returns an array with all the words capitalized", () => {
//   > 96 |     expect(capitalArrays(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//        |                                         ^
//     97 |     expect(capitalArrays(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     98 |   })
//     99 | })

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
    })
  })
// Failing!
//  FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ takes in a string and logs the index of the first vowel
// ● firstVowel › takes in a string and logs the index of the first vowel
// ReferenceError: firstVowel is not defined


// b) Create the function that makes the test pass.

// Psedocode:
// input: string of words
// output: index of the first vowel

// input: "learn"
// output: 1

// input: "academy"
// output: 0

// input: "challenges"
// output: 2

// Process
// Create a function named firstVowel that takes in a string and logs the index of the first vowel
// Use .indexOf() to log the index of the first vowel
// Return only the first vowel in the string

const firstVowel = (vowelString) => {
  let vowels = ['a', 'e', 'i', 'o', 'u']
    for(i = 0; i < vowelString.length; i++) {
      if(vowels.indexOf(" "))
      return [i]
    }
}
// I'M STUCK HERE! I DON'T KNOW WHAT TO DO NEXT.
// Failing!
// FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ takes in a string and logs the index of the first vowel

// ● firstVowel › takes in a string and logs the index of the first vowel

//   expect(received).toEqual(expected) // deep equality

//   Expected: 1
//   Received: [0]

//     164 | describe("firstVowel", () => {
//     165 |     it("takes in a string and logs the index of the first vowel", () => {
//   > 166 |       expect(firstVowel(vowelTester1)).toEqual(1)
//         |                                        ^
//     167 |       expect(firstVowel(vowelTester2)).toEqual(0)
//     168 |       expect(firstVowel(vowelTester3)).toEqual(2)
//     169 |     })
