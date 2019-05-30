export class Temperature{
    temp: number
    constructor(temp){
        this.temp = temp
    }

    toFahrenheit(){
        return (this.temp * (9/5)) + 32
    }

    toCelsius(){
        return (this.temp - 32) * (5/9)
    }
}

// let x = new Temperature()


//this will be exported to the main.js file and executed there.