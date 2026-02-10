/*---CRIAR LINHAS NA SEGUNDA TABELA---*/
document.getElementById("adicionar-saída").addEventListener("click", function() {
  //Seleciona o corpo da tabela
  const tabela = document.getElementById("tabela-saída-2").querySelector("tbody");

  //Cria uma nova linha
  const novaLinha = tabela.insertRow();

  //Cria células (uma para cada coluna)
  const colunas = ["RECEBEDOR", "DESCRIÇÃO", "QUANTIDADE", "UNIDADE", "TIPO", "VALOR UNITÁRIO", "VALOR TOTAL", "CA/CÓDIGO", "HORÁRIO"];
  
  colunas.forEach(() => {
    const celula = novaLinha.insertCell();
    celula.textContent = ""; // Pode deixar vazio ou colocar texto padrão
  });
});
