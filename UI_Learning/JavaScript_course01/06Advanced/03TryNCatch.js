let toRupees = (dollar)=> dollar * 64;

// console.log(toRupees(12))

let toDollar = (rupee)=>{
    if (typeof rupee === 'number'){
        return rupee/64
    }
    else{
        throw  ("Amount must be a number")  //Error message thrown
    }
}
try {
    // console.log(toDollar(768))
    console.log(toDollar('eleven'))
} 
catch (error) {
    console.log(error)      //the error messaged thrown gets "caught" and is displayed
}

console.log("This part will be executed if the try and catch block worked correctly.")