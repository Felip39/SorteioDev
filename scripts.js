const button = document.getElementById('sortear');
const dadoimg = document.getElementById('dado-img');
const resultDisplay = document.getElementById('result');

resultDisplay.style.marginTop = "20px";
resultDisplay.style.fontWeight = "bold";

function sortear() {
    const min = Math.ceil(document.getElementById('inputNumberentre').value);
    const max = Math.floor(document.getElementById('inputNumbere').value);

    if (min >= max || isNaN(min) || isNaN(max)) {
        alert("Verifique os números digitados!");
        return;
    }

    button.disabled = true;
    let iteracoes = 0;
    const maxIteracoes = 15; 

    const intervalo = setInterval(() => {
        const numeroTemporario = Math.floor(Math.random() * (max - min + 1)) + min;
        
        resultDisplay.innerText = numeroTemporario;
        resultDisplay.style.color = "#3d0202"; // Cor amarela enquanto gira
        resultDisplay.style.fontSize = "4rem";
        resultDisplay.style.opacity = "0.7";
        resultDisplay.style.transform = "scale(1.1)";

        iteracoes++;

        if (iteracoes >= maxIteracoes) {
            clearInterval(intervalo);
            
            const resultadoFinal = Math.floor(Math.random() * (max - min + 1)) + min;
            
            resultDisplay.innerText = resultadoFinal;
            resultDisplay.style.color = "white";
            resultDisplay.style.fontSize = "6rem";
            resultDisplay.style.opacity = "1";
            resultDisplay.style.transform = "scale(1)";
            resultDisplay.style.transition = "all 0.2s ease-out";
            
            button.disabled = false;
        }
    }, 50); 
    
}
button.addEventListener('click', sortear);
