//Maps() - is useful while handling NoSQL databases like Mongo and firebase
//Better to use Maps() instead of an array of objects.

let john = {
    name: 'John',
    age: 24,
    isActive: true,
}

let mary = {
    name: 'Mary',
    age: 22,
    isActive: true,
}

let roger = {
    name: 'Roger',
    age: 29,
    isActive: false,
}

let users = new Map()

users.set('John',john)
users.set('Mary',mary)
users.set('Roger',roger)

// console.log(users)
// console.log(users.keys())
// console.log(users.values())
// console.log(users.size)

// console.log(users.get('John'))

let user = users.get('Mary').name
console.log(user)


