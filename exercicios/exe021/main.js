const botaoAdicionar = window.document.getElementById("btnAdicionar");
const botaoFinalizar = window.document.getElementById("btnFinalizar");
const txtNumerosSalvos = document.getElementById("numerosSalvos");
const txtResultado = window.document.querySelector("div#res");

botaoAdicionar.addEventListener("click", verificarNumero);
botaoFinalizar.addEventListener("click", mostrarInformacoesNaTela);

var valoresSalvos = [];

function verificarNumero() {
  var txtvalorNaoVerificado = window.document.getElementById("valorRecebido");
  var valorNaoVerificado = Number(txtvalorNaoVerificado.value);

  if (isValorNoIntervalo(valorNaoVerificado)) {
    window.alert("Insira um valor válido entre 1 e 100!");
  } else {
    let valorVerificado = valorNaoVerificado;
    if (isValorJaAdicionado(valorNaoVerificado)) {
      window.alert("Esse número já foi adicionado");
    } else {
      valoresSalvos.push(valorVerificado);
      txtNumerosSalvos.innerHTML += `O número ${valorVerificado} foi adicionado.
`;
    }
  }
}

function mostrarInformacoesNaTela() {
  if (quantidadeDeElementosNaArray(valoresSalvos) == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    txtResultado.innerHTML = "";
    var teste = "tste";
    txtResultado.innerHTML += `<p>Ao todo temos ${quantidadeDeElementosNaArray(
      valoresSalvos
    )} números cadastrados.</p>`;
    txtResultado.innerHTML += `<p>O maior valor informado foi ${maiorValorNaArray(
      valoresSalvos
    )}.</p>`;
    txtResultado.innerHTML += `<p>O menor valor informado foi ${menorValorNaArray(
      valoresSalvos
    )}.</p>`;
    txtResultado.innerHTML += `<p>Somando todos os valores temos ${somaDosValoresDaArray(
      valoresSalvos
    )}.</p>`;
    txtResultado.innerHTML += `<p>A média dos valores registrados é ${mediaDosValoresDaArray(
      valoresSalvos
    )}</p>.`;
  }
}

function isValorNoIntervalo(valor) {
  return valor > 100 || valor < 1;
}

function isValorJaAdicionado(valor) {
  return valoresSalvos.includes(valor);
}

function quantidadeDeElementosNaArray(valores) {
  return valores.length;
}

function maiorValorNaArray(valores) {
  return Math.max(...valores);
}

function menorValorNaArray(valores) {
  return Math.min(...valores);
}

function somaDosValoresDaArray(valores) {
  var soma = 0;
  for (let i = 0; i < quantidadeDeElementosNaArray(valores); i++) {
    soma += valores[i];
  }
  return soma;
}

function mediaDosValoresDaArray(valores) {
  return Math.floor(
    somaDosValoresDaArray(valores) / quantidadeDeElementosNaArray(valores)
  );
}
