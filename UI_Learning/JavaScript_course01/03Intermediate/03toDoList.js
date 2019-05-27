toDo = []

toDo.unshift("Buy bread")           //No.3
toDo.unshift("Learn JavaScript")    //No.2
toDo.unshift("Learn Angular")       //No.1

toDo.forEach(function(items,index){
    console.log(`${index+1}. to do: ${items}`)
})
