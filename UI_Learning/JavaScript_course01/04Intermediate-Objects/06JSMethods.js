//searching for objects in arrays. Important for dealing APIs.
//Array of objects

const toDo = ["Buy vegetables","Go swimming", "Learn JavaScript"]

//indexOf()
console.log("Index of task - swimming: " + toDo.indexOf("Go swimming"))

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

toDoObj.forEach(function(item){
    console.log(item.title + " - " + item.isDone)  
})

let x = toDoObj.find(function(todo){
    return todo.title == "Learn JavaScript"
})

console.log(x)