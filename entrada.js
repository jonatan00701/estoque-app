/*---CRIAR LINHAS NA SEGUNDA TABELA---*/
document.getElementById("adicionar-entrada").addEventListener("click", function() {
  //Seleciona o corpo da tabela
  const tabela = document.getElementById("tabela-entrada-2").querySelector("tbody");

  //Cria uma nova linha
  const novaLinha = tabela.insertRow();

  //Cria células (uma para cada coluna)
  const colunas = ["CA/CÓDIGO", "LOCAL", "DESCRIÇÃO", "UNIDADE", "TIPO", "ENTRADA", "SAÍDA", "TOTAL", "VALOR ÚNITARIO", "VALOR TOTAL"];
  
  colunas.forEach(() => {
    const celula = novaLinha.insertCell();
    celula.textContent = ""; // Pode deixar vazio ou colocar texto padrão
  });
});
