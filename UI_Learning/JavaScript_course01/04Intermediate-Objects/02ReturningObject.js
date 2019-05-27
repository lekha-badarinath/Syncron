let courseOne = {
    title: "Objects in JavaScript",
    duration: 15,
    author: "John Doe",
    description: "Lorem Ipsum"
}

let durationChange = function(newObject){
    let durationObject = {
        durationOne: `This is the ${newObject.title} course. Its duration is: ${newObject.duration + 10} minutes`,
        durationTwo: `This is the ${newObject.title} course. Its duration is: ${newObject.duration + 20} minutes`
    }
    return durationObject
}

console.log(durationChange(courseOne).durationTwo)