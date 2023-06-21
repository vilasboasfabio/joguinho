var tentativas = 0;
function verificarResposta() {
    var resposta = document.getElementById("resposta").value;
  
    if (resposta.toLowerCase() === "laranja") {
      exibirMensagem("Parabéns! Você acertou!");
      document.getElementById("botão_para_proxima_fase").innerHTML = `<a href="musica.html" target="_parent">Ir para a proxima pergunta...</a>`
    } else {
      tentativas++;
      if (tentativas <= 3) {
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
      "Dica: essa cor está relcionada à boa receptividade e calma.",
      "Dica: essa é a cor do uniforme do banco Itaú.",
      "Dica: ela também é uma fruta.",
     
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