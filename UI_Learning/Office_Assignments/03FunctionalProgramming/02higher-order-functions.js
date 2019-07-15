const animals = [
    {name:'dalmation', species:"dog"},
    {name:'kite', species:"bird"},
    {name:'persian', species:"cat"},
    {name:'salmon', species:"fish"},
    {name:'german shephard', species:"dog"},
    {name:'husky', species:"dog"},];

//using for loop
for (let i = 0; i<animals.length; i++){
    if(animals[i].species === "dog"){
        animals.splice(i,i);
    }
}
console.log(animals);

//using Filter function (higher order functions)
const newAnimals = animals.filter(element => element.species !== "dog");

console.log(newAnimals);

