var tentativas = 0;
function verificarResposta() {
    var resposta = document.getElementById("resposta").value;
  
    if (resposta.toLowerCase() === "dance of sugar plum fairy") {
      exibirMensagem("Parabéns! Você acertou!");
      document.getElementById("botão_para_proxima_fase").innerHTML = `<a href="carta.html" target="_parent">Veja a mensagem boiólinha que eu fiz para você.</a>`
    } else {
      tentativas++;
      if (tentativas <= 5) {
        exibirDica(tentativas);
        document.getElementById("tentativas").innerHTML = "Tentativas: " + tentativas;
  
      } else {
        exibirMensagem("Poxa, infelizmente você errou :/");
        desabilitarInput();
      }
    }
  }
  
  function exibirDica(numeroTentativa) {
    var dicas = [
      "Dica: essa música é de 1892. ",
      "Dica: é a música principal de uma peça de balet famosa.",
      "Dica: foi composta por Tchaikovsky.",
      "Dica: ele está presnte na peça do quebra-nozes.",
      "Dica: a bailarina que faz a performance, é caracterizada de fada.",
     
    ];
  
    var dica = document.getElementById("dica");
    dica.innerHTML = dicas[numeroTentativa - 1];
  }
  
  function exibirMensagem(mensagem) {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = mensagem;
  }
  
  function desabilitarInput() {
    document.getElementById("resposta").disabled = true;
    document.getElementById("verificar").disabled = true;
  }