document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const contrasteBotao = document.getElementById('alto-contraste');

  let tamanhoAtualFonte = 1;

  botaoDeAcessibilidade.addEventListener('click', function () {
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
  });

  aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte = Math.max(0.8, tamanhoAtualFonte - 0.1);
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  contrasteBotao.addEventListener('click', function () {
    document.body.classList.toggle('contraste');
  });
});
