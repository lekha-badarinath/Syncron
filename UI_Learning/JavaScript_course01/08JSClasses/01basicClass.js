class SayHello{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    hello(name){
        console.log(`Hello ${name}!`)
    }
    addFunc(){
        console.log(this.x + this.y)
    }
    set X(value){             
        this.x = value
    }
    get X(){
        return this.x
    }

}

let newObj = new SayHello(12,24)
// newObj.x = 1
newObj.y = 2
newObj.hello("Lekha Badarinath")
newObj.addFunc()
newObj.X = 44
let x = newObj.X


console.log(x)