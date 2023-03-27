# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: 
The difference between a parameter and and an argument is that a parameter has no value. It will output all data unless you add in something specific that shows the data that you are referencing or what you want to be shown or evaluated in your entire code. An argument is essentially information or value that a built-in-method needs in order to run your code the way that you want it to. An argument gets passed in parentheses after the built-in method and is specific to that method and specific to the actual data that you want to be evaluated in the function. A parameter is just a placeholder for the data that gets passed into the actual function in parentheses and can take in a mix of data types as long as Javascript recognizes it.  

For example: if you have a variable named myName = "Evelyn" and want to return only the value of "n" in the index, and you did the following:
<!-- var myName = "Evelyn" -->
<!-- console.log(myName.charAt()) // output: "E" --- will return the first letter because it has no argument or value in the parameter, no data is entered between the parentheses after the .charAt() buit-in method. -->

However, in order to take a specific value of "n" in the index of the name "Evelyn", you would do the following:
<!-- console.log(myName.charAt(5)) // output: "n" --- because using the .charAt() built-in method will return the value at a specific index, an argument or value (which in this case is an index location) has been entered between the parentheses. -->

Researched answer:
A parameter can be named anything, belongs to a function and is a variable. It holds the data in the function.

An argument cannot be named just anything, it is actual data. It belongs to a built-in method and is additional information that uses the value of a function to set a condition that gets passed into a set of parentheses after the method name to perform the action that is intended.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
The predefined parameters of .map() are value, index and array. The value is the only one that is required in a function. Index and array are both optional parameters. 

Researched answer:
Predefined parameters of .map() are value, index and array. The value parameter is required and the index and array parameters are optional. 

3. What is the difference between map and filter?

Your answer:
The difference between map and filter is that when using the map method, it will transfrom the values in an array while keeping the same length as the orignal array. So, map will check over or iterate over the elements in an array and return a new array but will stay the same length as the original. When using the filter method, it will filter out what we want and what we don't want based on the conditions we set. So, filter will look for whether something is true or false (boolean values) and whether a condition is met and returns a new array that is a portion of the original array. The filter method also has a built-in "if" statement so we don't have to list out everything that we want to show is true or false because the method will automatically do it for us. 

Researched answer:
Both .map() and .filter() have three built-in parameters - value, index, array - that a function is called on.
Parameters will always be the same order. Higher-order functions have to pass thru at least one argument or value but can have up to two or three arguments.

4. What is iteration?

Your answer: 
Iteration is a repetitive process. It will check for the conditions you set for each value in an array of objects and keeps repeating the process until the conditions have been met. 

Researched answer:
Iteration is a set of instructions that are executed over and over until a condition is met. We can perform iteration on arrays and strings. 

5. What is the difference between a function and a method?

Your answer:
A function is a set of codes that returns some sort of data. A method has two categories which will either modify the function it is called on (mutator) or not modify it(accessor). 

Researched answer:
A Function is a reusable piece of code that returns an output when called on. It is a set of instructions that give you details on how to do a task or gives control over when an action happens. A method can help us to access and modify the content in a function to add information to be passed into parentheses as an argument. The output will be slightly different each time you use a method. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: 
JavaScript only hoist variables. Hoisting is a behavior that  moves declarations to the top of a function.

Researched answer:
Hoisting is a behavior in JavaScript. A variable can be declared after it has been used. - w3schools.com

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: 
React components use the PascalCase naming convention. Components are broken down into two categories: logic and display.

2. Spread operator: 
A spread operator allows a dynamic number of arguments to be passed and expanded on in a function. 

3. React state: 
React state is a variable that stores data that determines how a component will behave with the user interface. We can track and update data in components.

4. React props: 
React properties uses objects to pass information from one component to another component. React props cannot be changed, they are "read-only". 

5. DOM events: 
DOM events give a visual of the html elements. It organizes the html elements into a tree-like structure. DOM interacts with a user, mouse or keyboard. 
