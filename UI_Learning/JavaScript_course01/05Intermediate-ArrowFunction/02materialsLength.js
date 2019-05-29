materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
]
newArr = []
let lengthFunction = function(arr){
    arr.forEach(function(data){
        newArr.push(data.length)
    })
}

lengthFunction(materials)
console.log(newArr)



