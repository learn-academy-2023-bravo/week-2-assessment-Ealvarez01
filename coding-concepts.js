// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
console.log(cohort.split(""))

// a) Your answer: 
// "B", "r", "a", "v", "o", "", "2", "0", "2", "3"

// b) Verify and explain:
//Output: 'B', 'r', 'a', 'v', 'o', ' ', '2', '0','2', '3'
  // This is a variable of a string with a built-in method. It will log the entire string separating each index value because it is using the accessor .split() built-in method which does not change the original string, it only 'splits' or puts spaces in between each value of the string. Therefore, when you log the variable, the .split() method will return all values in the string separated by commas. 

// --------------------2) What will this log?

const greeter = (name) => { 
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:
// This will not log anything, it's undefined. 

// b) Verify and explain: //Output: undefined
  // The argument "LEARN Student" is not defined in the function. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10,12, 14, 16]

// b) Verify and explain: //Output: [ 8, 10, 12, 14, 16 ]
  //This is a higher-order function of an array using the .map() built-in method. The array give us the values of each index. When you use the .map () method, you are transforming each value in the array. Here, the name "number" is used in the argument to transform 'any number' in the array to perform an anonymous function for each number to be multiplied by two. Therefore, when you log the function named "multipliedByTwo", the .map() method will allow for every value in the array to be multiplied by 2, while keeping the same length as the original array.  

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]

// b) Verify and explain: //Output: [ 11, 13, 15 ]
  // /This is a higher-order function of an array using the .filter() built-in method. The array give us the values of each index. When you use the .filter () method, you are filtering each value in the array and are essentially asking for a boolean value (is it true or is it false). Here, the name "number" is used in the argument to find 'any number' in the array to perform an anonymous function for each number to check if a number is odd. Therefore, when you log the function named "onlyOdds", the .filter() method will allow for every value in the array to be checked if it is odd, while removing the numbers that are even, which changes the length of the original array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript

// b) Verify and explain: //Output: JavaScript
  //This is an object function using a method. The object function brings in behavior in a function. In this example, the object is "myCodingSkills" and it lists four keys (or properties) with various arrays and strings for each key with values pertaining to that specific key. Therefore, since it is asking to log the reference of the object method and return the languages key with an index of an array set at 0, it asks for the specific value of index 0 which is the first string in the array (index always start at zero).

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: //Output: Learn { student: 'George', cohort: 'Bravo', year: 2023 }
  //This is a Class function. I thought that this would only log the key for the student "George" because it does not list the other keys' values - the string or year - inside the parameter of the method (constructor). However, after reviewing the LEARN syllabus, using the .this key is a keyword that independently refers to the object that it belongs to and can be included indiviually passed into the Class function and will return the same desired output. 