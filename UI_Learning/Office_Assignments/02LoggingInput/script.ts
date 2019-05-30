//Logging input

let logInput = function(){
    let text = document.getElementById('input')
    console.log(text.value)
    document.getElementById('displayOne').innerHTML = text.value
    document.getElementById('displayTwo').innerHTML = text.value.toUpperCase()
}


