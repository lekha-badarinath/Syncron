var iAmGlobal = "First Value"
if(true) {
    var iAmLocal = "Second Value"
    iAmGlobal = "Value Changed"
    console.log(iAmGlobal)
    console.log(iAmLocal)
}

console.log(iAmGlobal)
console.log(iAmLocal)