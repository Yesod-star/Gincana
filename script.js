let tempoRestante = localStorage.getItem('tempoRestante') ? parseInt(localStorage.getItem('tempoRestante')) : 3600;
let tentativasRestantes = localStorage.getItem('tentativasRestantes') ? parseInt(localStorage.getItem('tentativasRestantes')) : 3;
let timer;


function decodificarCodigo(base64) {
    return atob(base64).split(",");
}


function formatarTempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
}

function iniciarTimer() {
    document.getElementById("time").innerText = formatarTempo(tempoRestante);
    timer = setInterval(() => {
        if (tempoRestante > 0) {
            tempoRestante--;
            localStorage.setItem('tempoRestante', tempoRestante);
            document.getElementById("time").innerText = formatarTempo(tempoRestante);
        } else {
            clearInterval(timer);
            document.getElementById("mensagem").innerText = "A bomba explodiu!";
        }
    }, 1000);
}

function verificarCodigo() {
    const inputs = document.querySelectorAll(".input-box");
    const tentativa = Array.from(inputs).map(input => input.value);
    let bordas = [];

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
        localStorage.removeItem('tempoRestante');
    } else {
        document.getElementById("mensagem").innerText = "Código incorreto!";
        if (tentativasRestantes > 0) {
            document.getElementById("erroSound").play();
        } else {
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
console.log("Inspecione o código fonte do site");








































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "

var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
const codigoCriptografado = "MTYsMjEsMzQsNzgsMDg=";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";
var codigoCriptografadoss = "MTYsMjEsMzQsMXAXT";

var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
const codigoCorreto = decodificarCodigo(codigoCriptografado);
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "
var texto ="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was "

