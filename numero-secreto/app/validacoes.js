function verificaSeOChuteTemUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        divChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
          divChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorNumero} e ${maiorNumero}</div>`;
          return      
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero < numeroSecreto) {
        divChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    } else {
        divChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-down"></i></div>`
    }
}

function chuteForInvalido (numero) {
    return Number.isNaN(numero)


}

function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorNumero || numero < menorNumero;
    

}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    } 
})