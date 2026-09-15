// ================= SOM DO BOTÃO "DIARRÉIA" =================

document.addEventListener("DOMContentLoaded", function () {   // roda só depois que o HTML todo existir na tela

    const botao = document.getElementById("botao-caganeira");  // acha o botão pelo id
    const som   = document.getElementById("som-caganeira");    // acha a tag <audio> escondida pelo id

    if (!botao) {                                              // se voltou null, o id não existe no HTML
        console.error("NÃO ACHEI o botão #botao-caganeira");
        return;                                                // para aqui pra não dar erro na linha seguinte
    }
    if (!som) {                                                // mesma checagem pra tag de áudio
        console.error("NÃO ACHEI a tag <audio> #som-caganeira");
        return;
    }

    som.addEventListener("error", function () {                // dispara se o navegador não conseguir baixar o arquivo
        console.error("SOM não carregou. Caminho:", som.currentSrc || som.src);
    });

    botao.addEventListener("click", function () {              // "click" = o evento que dispara o som
        som.currentTime = 0;                                   // rebobina pro início (senão o 2º clique fica mudo)
        som.volume = 0.9;                                      // volume de 0 a 1

        som.play()                                             // play() devolve uma Promise
           .catch(err => console.error("play() falhou:", err)); // se falhar, o motivo aparece no console (F12)
    });
});
