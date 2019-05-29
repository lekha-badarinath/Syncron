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
    },
    {
        title: "Learn Angular",
        isDone: true,
    },
    {
        title: "Have lunch",
        isDone: false,
    },
    {
        title: "Go to the gym",
        isDone: true,
    }
]

//using normal functions
let functionOne = function(obj){
    obj.forEach(function(data){
        if (data.isDone == false){
            console.log(data)
        }
    })
}

// functionOne(toDoObj)

//using filter() and callback function

let pendingTasks = toDoObj.filter(function(todo){
    return todo.isDone === false
})
console.log(pendingTasks)

//using filter(), callback function and arrow function

let tasksCompleted = toDoObj.filter((todo) =>{
    return todo.isDone === true
})

console.log(tasksCompleted)

