//using arrow function
//Important - Never use arrow functions with methods and constructors
let camera = {
    brand: 'Canon',
    price: 60000,
    weight: 2,
    description: ()=> `This is a ${this.brand} camera.`
}
console.log(camera.description())       //does not work

//using normal functions
let camera2 = {
    brand: 'Canon',
    price: 60000,
    weight: 2,
    description: function(){
        return `This is a ${this.brand} camera.`
    }
}
console.log(camera2.description())      //works

//Another way to define methods
let camera3 = {
    brand: 'Canon',
    price: 60000,
    weight: 2,
    description(){
        return `This is a ${this.brand} camera.`    
    }
}
console.log(camera3.description())      //works