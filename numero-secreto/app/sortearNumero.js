const menorNumero = 1;
const maiorNumero = 1000;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

elementoMenorValor.innerHTML = menorNumero;
elementoMaiorValor.innerHTML = maiorNumero;


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorNumero + 1)
}
