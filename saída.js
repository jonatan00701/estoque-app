//Faz com que o código dentro da função seja executado ao clicar no botão
document.getElementById("adicionar-saída").addEventListener("click", function() {
  //Obtem o corpo da tabela superior
  const tabelaSuperior = document.getElementById("tabela-saída-1").querySelector("tbody");
  //Obtem o corpo da tabela inferior
  const tabelaInferior = document.getElementById("tabela-saída-2").querySelector("tbody");

  //Pega a ultima linha da tabela superior
  const ultimaLinha = tabelaSuperior.lastElementChild;
  //Armazena o conteúdo da ultima linha da tabela superior
  const dados = ultimaLinha.querySelectorAll("td");

  //Cria uma nova linha no corpo da tabela inferior
  const novaLinha = tabelaInferior.insertRow();

  //Cria celulas na nova linha da tabela inferior e preenche cada uma em seus respectivos locais
  novaLinha.insertCell().textContent = dados[0].textContent; // RECEBEDOR
  novaLinha.insertCell().textContent = dados[2].textContent; // DESCRIÇÃO
  novaLinha.insertCell().textContent = dados[3].textContent; // QUANTIDADE
  novaLinha.insertCell().textContent = ""; // UNIDADE
  novaLinha.insertCell().textContent = ""; // TIPO
  novaLinha.insertCell().textContent = ""; // VALOR UNITÁRIO
  novaLinha.insertCell().textContent = ""; // VALOR TOTAL
  novaLinha.insertCell().textContent = dados[1].textContent; // CA/CÓDIGO
  novaLinha.insertCell().textContent = new Date().toLocaleString(); // HORÁRIO
})