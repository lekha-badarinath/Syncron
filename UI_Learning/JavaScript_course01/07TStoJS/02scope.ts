let looping = function(){
    for (let i = 0; i < 5; i++){
        console.log("in loop: "+i)
    }
    //console.log("Outside of loop:"+i)   //when you try to convert this file to a .js file, during compilation, an error is thrown.
                                        //however, the file is still created.
}
looping()

