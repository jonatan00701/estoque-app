//Faz com que o código dentro da função seja executado ao clicar no botão
document.getElementById("adicionar-entrada").addEventListener("click", function() {
  //Obtem o corpo da tabela superior
  const tabelaSuperior = document.getElementById("tabela-entrada-1").querySelector("tbody");
  //Obtem o corpo da tabela inferior
  const tabelaInferior = document.getElementById("tabela-entrada-2").querySelector("tbody");

  //Pega a ultima linha da tabela superior
  const ultimaLinha = tabelaSuperior.lastElementChild;
  //Armazena o conteúdo da ultima linha da tabela superior
  const dados = ultimaLinha.querySelectorAll("td");

  //Cria uma nova linha no corpo da tabela inferior
  const novaLinha = tabelaInferior.insertRow();

  // Pegando os valores de ENTRADA e SAÍDA
  const entrada = parseFloat(dados[5].textContent) || 0;
  const saida = parseFloat(dados[x].textContent) || 0; //Ainda vai ser adicionada
  // Calculando o TOTAL (ENTRADA - SAÍDA)
  const total = entrada - saida;

  //Cria celulas na nova linha da tabela inferior e preenche cada uma em seus respectivos locais
  novaLinha.insertCell().textContent = dados[0].textContent; //CA/CÓDIGO
  novaLinha.insertCell().textContent = dados[1].textContent; //LOCAL
  novaLinha.insertCell().textContent = dados[2].textContent; //DESCRIÇÃO
  novaLinha.insertCell().textContent = dados[3].textContent; //UNIDADE
  novaLinha.insertCell().textContent = dados[4].textContent; //TIPO
  novaLinha.insertCell().textContent = dados[5].textContent; //ENTRADA
  novaLinha.insertCell().textContent = dados[x].textContent; //SAÍDA //Ainda vai ser adicionada
  novaLinha.insertCell().textContent = total //TOTAL
  novaLinha.insertCell().textContent = dados[6].textContent; //VALOR ÚNITARIO
  novaLinha.insertCell().textContent = dados[0].textContent; //VALOR TOTAL
})