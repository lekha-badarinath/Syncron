//dice simulation

let roll = (lower,upper) => Math.floor(Math.random() * (upper - lower) + 1) + lower

console.log(roll(1,6))
