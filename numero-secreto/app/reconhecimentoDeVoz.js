
let box = document.querySelector('.box')
let divChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak);


function onSpeak(event){
   let chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute)
    verificaSeOChuteTemUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    divChute.innerHTML = `
        <div>Você disse : </div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())