const arr = [1,2,3,"jon",true,12]
console.log(arr)
console.log(arr[0])
console.log(arr[arr.length-1])
console.log(`There are ${arr.length} of elements in the array.`)

//import array methods

const num = ['one','two','three','four','five','six']

num.shift()
console.log(num)

num.unshift('ONE')
console.log(num)

num.pop()
console.log(num)

num.push('SIX')
console.log(num)

//all the below of valid
num.splice(2,1,'hello')
num.splice(2,2,'hello','world')
num.splice(2,2,'hello','world','say')
console.log(num)


//splice and slice

const alphabet = ['a','b','c','d','e','f']
console.log(alphabet.slice(2))  //returns elements from #2 to end. Original array is not affected
console.log(alphabet)

console.log(alphabet.splice(2)) //Returns elements from #2 to end. The returned elements are removed from the original array 
console.log(alphabet)