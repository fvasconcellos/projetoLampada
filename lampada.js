const lamp = document.getElementById('lamp');
const btnOnOff = document.getElementById('btnOnOff');


function estarquebrada() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampLigada() {
    if (!estarquebrada()) {
        lamp.setAttribute('src', 'img/ligada.jpg');
    }
}

function lampDesligada() {
    if (!estarquebrada()) {
        lamp.setAttribute('src', 'img/desligada.jpg');
    }

}

function lampQuebrada() {
    lamp.setAttribute('src', 'img/quebrada.jpg');

}

function lampOnOff() {
    if (btnOnOff.textContent == 'Ligar') {
        lampLigada();
        btnOnOff.textContent = 'Desligar';
    } else {
        lampDesligada();
        btnOnOff.textContent = 'Ligar';
    }
}


btnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampLigada);
lamp.addEventListener('mouseleave', lampDesligada);
lamp.addEventListener('dblclick', lampQuebrada);