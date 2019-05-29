//normal function
let helloFunction = function(name){
    return `Hello, ${name}. Hope you have a great day!`
}

console.log(helloFunction("Lekha Badarinath"))

//arrow function

let helloFunctionTwo = (name) => {
    return `Hello, ${name}. Hope you have a great day!`
}

console.log(helloFunctionTwo("John Doe"))

//advanced 

let helloFunctionThree = (name) => `Hello, ${name}. Hope you have a great day!` //Curly brackets are optional and for clarity only

console.log(helloFunctionThree("James Bond"))