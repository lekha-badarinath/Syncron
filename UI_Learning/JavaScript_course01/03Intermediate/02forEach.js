days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

let newFunction = function(){
    console.log("Hello World")
}

days.forEach(newFunction)

console.log("\n\nUsing for loop:")
for (i=0; i<days.length; i++){
    console.log(days[i])
}

console.log("\n\nUsing forEach() function:")
days.forEach(function(day){
    console.log(day)
})

