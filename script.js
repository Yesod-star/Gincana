let tempoRestante = 3600;
let tentativasRestantes = localStorage.getItem('tentativasRestantes') ? parseInt(localStorage.getItem('tentativasRestantes')) : 3; // Recupera as tentativas do localStorage ou usa 3 como padrão
let timer; // Declare the timer variable globally

const codigoCriptografado = "MTIsMzQsNTYsNzgsOTAsMTE=";

// Decode when needed
function decodificarCodigo(base64) {
    return atob(base64).split(",");
}

const codigoCorreto = decodificarCodigo(codigoCriptografado);

function formatarTempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
}

function iniciarTimer() {
    document.getElementById("time").innerText = formatarTempo(tempoRestante);
    timer = setInterval(() => {  // Use the global timer variable
        if (tempoRestante > 0) {
            tempoRestante--;
            document.getElementById("time").innerText = formatarTempo(tempoRestante);
        } else {
            clearInterval(timer); // Stop the timer when it reaches 0
            document.getElementById("mensagem").innerText = "A bomba explodiu!";
        }
    }, 1000);
}

function verificarCodigo() {
    const inputs = document.querySelectorAll(".input-box");
    const tentativa = Array.from(inputs).map(input => input.value);

    let bordas = [];  // Array para armazenar as cores das bordas

    // Verificar se o código está correto e alterar as bordas dos inputs
    tentativa.forEach((valor, index) => {
        if (valor === codigoCorreto[index]) {
            bordas[index] = "green";
        } else if (codigoCorreto.includes(valor)) {
            bordas[index] = "yellow";
        } else {
            bordas[index] = "red";
        }
    });

    inputs.forEach((input, index) => {
        input.style.borderColor = bordas[index];
    });

    if (JSON.stringify(tentativa) === JSON.stringify(codigoCorreto)) {
        document.getElementById("mensagem").innerText = "Bomba desarmada com sucesso!";
        document.getElementById("successSound").play();
        changeToGreenTheme();
        clearInterval(timer); 
        localStorage.removeItem('tentativasRestantes'); 
    } else {
        document.getElementById("mensagem").innerText = "Código incorreto!";
        if(tentativasRestantes > 0){
            document.getElementById("erroSound").play();
        }else{
            document.getElementById("failureSound").play(); 
        }

        tentativasRestantes--;

        localStorage.setItem('tentativasRestantes', tentativasRestantes);

        if (tentativasRestantes < 0) {
            document.getElementById("mensagem").innerText = "A bomba explodiu!";
            clearInterval(timer); 
        } else {
            document.getElementById("mensagem").innerText += ` Tentativas restantes: ${tentativasRestantes}`;
        }
    }
}

function changeToGreenTheme() {
    document.documentElement.style.setProperty('--primary-color', '#55ff55');
    document.documentElement.style.setProperty('--primary-hover', '#00ff00');
    document.documentElement.style.setProperty('--border-color', '#55ff55');
    document.documentElement.style.setProperty('--text-highlight', '#00ff00');
    document.documentElement.style.setProperty('--box-shadow', '#55ff55');
}

iniciarTimer();
console.log("Inspecione o código fonte do site")