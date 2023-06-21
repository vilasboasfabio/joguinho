
var tentativas = 0;
function verificarResposta() {
    var resposta = document.getElementById("resposta").value;
  
    if (resposta.toLowerCase() === "central do brasil") {
      exibirMensagem("Parabéns! Você acertou!");
      document.getElementById("botão_para_proxima_fase").innerHTML = `<a href="doce.html" target="_parent">Ir para a proxima pergunta...</a>`
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
      "Dica: O filme é brasileiro.",
      "Dica: Foi indicado ao Oscar de Melhor Filme Estrangeiro.",
      "Dica: Foi dirigido por Walter Salles.",
      "Dica: A protagonista é interpretada por Fernanda Montenegro.",
      "Dica: Foi lançado em 1998."
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
   

