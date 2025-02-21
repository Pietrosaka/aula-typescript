type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`Mensagem do servidor: ${resposta}`);
  } else {
    console.log(resposta ? "Operação bem-sucedida!" : "Falha na operação.");
  }
}

processarResposta("Tudo certo!");
processarResposta(true);
processarResposta(false);
