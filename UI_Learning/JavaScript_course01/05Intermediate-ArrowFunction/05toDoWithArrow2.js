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

let tasksCompleted = toDoObj.filter((data)=>data.isDone === true)

tasksCompleted.forEach((data)=>{
    console.log(data.title)
})