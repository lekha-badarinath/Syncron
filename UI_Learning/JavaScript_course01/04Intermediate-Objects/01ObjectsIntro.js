let obj1 = {
    Name: "Lekha Badarinath",
    Age: 25,
    Sex: "Female",
    EmploymentStatus: "Employeed",
    YearsOfExperience: 2.5
}
let messageFunction = function(obj){
    if (obj.EmploymentStatus == "Employeed"){
        console.log(`\nHey ${obj.Name}, congratulations!!`)
    }

    else{
        console.log(`\n ${obj.Name}, keep trying`)
    }
}

messageFunction(obj1)

obj1.Name = "John Doe"
console.log(obj1)

let changeExperience = function(newObject){
    return `Hi ${newObject.Name}, you have ${newObject.YearsOfExperience + 0.6} years of experience.`
}

console.log(changeExperience(obj1))