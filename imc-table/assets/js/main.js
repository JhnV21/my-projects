const forms = document.querySelector("form");

forms.addEventListener("submit", function(e) {
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
    const answer = document.querySelector("#answer p");
    const weightValue = parseInt(weight.value);
    const heightValue = parseFloat(height.value);
    const imc = weightValue / (heightValue * heightValue);
    const checker = checkIMC();

    function checkIMC() {
        if ( imc < 18.5 ) {
            answer.style.backgroundColor = "yellow"
            answer.style.color = "black"
            return "Abaixo do peso."
        } else if ( imc >= 18.5 && imc <= 24.9 ) {
            answer.style.backgroundColor = "green"
            return "Peso normal."
        } else if ( imc >= 25 && imc <= 29.9 ) {
            answer.style.backgroundColor = "yellow"
            answer.style.color = "black"
            return "Sobrepeso"
        } else if ( imc >= 30 && imc <= 34.9 ) {
            answer.style.backgroundColor = "red"
            return "Obesidade grau 1"
        } else if ( imc >= 35 && imc <= 39.9 ) {
            answer.style.backgroundColor = "red"
            return "Obesidade grau 2"
        } else if ( imc >= 40 ) {
            answer.style.backgroundColor = "red"
            return "Obesidade grau 3"
        }
    }

    if ( isNaN(imc) ) {
        answer.style.backgroundColor = "white"
        answer.style.color = "black"
        answer.innerText = "Valor incorreto, digite apenas números.";
    } else {
        answer.style.color = "black"
        answer.innerText = `Seu IMC é ${imc.toFixed(1)} (${checker})`;
    }
    
    e.preventDefault();
})

