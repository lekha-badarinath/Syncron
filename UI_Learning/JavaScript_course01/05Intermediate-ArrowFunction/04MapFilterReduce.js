arr = [1,2,3,4,5,6,7,8,9]

//map
let usingMap = arr.map((element) => element * 2)
console.log(usingMap)

//filter
let usingFilter = arr.filter((element) => element%2 == 0)
console.log(usingFilter)

//reduce
let usingReduce = arr.reduce((x,y)=>x+y)
console.log(usingReduce)