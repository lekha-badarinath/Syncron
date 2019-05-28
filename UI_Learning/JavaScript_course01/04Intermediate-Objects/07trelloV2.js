//Search through an array of objects and display the status of the task

const toDoObj = [
    {
        title: "Buy vegetables",
        isDone: false,
    },
    {
        title: "Go swimming",
        isDone: false,
    },
    {
        title: "Learn JavaScript",
        isDone: false,
    }
]

toDoObj.push({
    title: "Learn Angular",
    isDone: false,
})

let taskStatus = function(arrayObj,title){
    let getTaskStatus = arrayObj.find(function(arr){
        return arr.title.toLowerCase() === title.toLowerCase()
    })

    return `Status of "${getTaskStatus.title}" is - ${getTaskStatus.isDone} `
}

console.log(taskStatus(toDoObj,"Learn angular"))