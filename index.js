// pega o botão pelo id que colocamos no HTML
const botaoCaganeira = document.getElementById("botao-caganeira");

// pega a tag <audio> escondida pelo id dela
const somCaganeira = document.getElementById("som-caganeira");

// addEventListener = "fique escutando"; "click" = o evento; depois vem a função que roda
botaoCaganeira.addEventListener("click", function () {
    somCaganeira.currentTime = 0;   // volta o áudio pro segundo 0 (senão o 2º clique não toca nada)
    somCaganeira.play();            // toca o som
});