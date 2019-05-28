// console.log(Math.floor(Math.random() * 6 + 1))

let lower = 20
let upper = 25

let getRandomNumber = function(lower,upper){
    let randomNum = (Math.floor(Math.random() * (upper - lower + 1)))+lower
    return randomNum
}

console.log(getRandomNumber(1,6))