var tentativas = 0;
function verificarResposta() {
    var resposta = document.getElementById("resposta").value;
  
    if (resposta.toLowerCase() === "eclaier") {
      exibirMensagem("Parabéns! Você acertou!");
      document.getElementById("botão_para_proxima_fase").innerHTML = `<a href="cor.html" target="_parent">Ir para a proxima pergunta...</a>`
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
      "Dica: o doce é originário da França.",
      "Dica: Ele é normalmente recheado com creme de confeiteiro ou chocolate.",
      "Dica: É um doce muito popular no Brasil.",
      "Dica: É um doce de massa patê à choux.",
      "Dica: A massa é feita com farinha, manteiga, água ou leite e sal."
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