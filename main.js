let altura = document.querySelector(".height")
let peso = document.querySelector(".peso")
let form = document.querySelector(".imc")

form.addEventListener('submit', function(event){
    console.log(`sua altura é: ${altura.value}`)
    console.log(`seu peso é: ${peso.value}`);
    event.preventDefault()
    redirecionaIMC() 
})

function calculaIMC(altura, peso){
    let imc = peso / Math.pow(altura, 2)
    return imc
}

function redirecionaIMC() {
    let alturaFinal = parseFloat(altura.value / 100)
    let pesoFinal = parseFloat(peso.value)
    let imc = calculaIMC(alturaFinal, pesoFinal).toFixed(2)

    if (imc <= 16.5){
        console.log(`Seu imc é: ${imc}`);
        return
    }
    if (imc > 16.5 && imc <= 18.5) {
        console.log(`Seu imc é: ${imc}`);
        return
    }
    if (imc > 18.5 && imc <= 24.99){
        console.log(`Seu imc é: ${imc}`);
        return
    }
    if (imc > 24.99 && imc <= 29.99){
        console.log(`Seu imc é: ${imc}`);
        return
    }
    if (imc > 29.99 && imc <= 34.99){
        console.log(`Seu imc é: ${imc}`);
        return
    }
    if (imc > 34.99 && imc <= 39.99){
        console.log(`Seu imc é: ${imc}`);
        return
    }
    else{
        console.log(`Seu imc é: ${imc}`);
        return
    }
}

redirecionaIMC