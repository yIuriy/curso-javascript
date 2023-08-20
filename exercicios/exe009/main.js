var txtidade = document.getElementById("itxtidade");
var idade = Number(txtidade.value);
var res = document.getElementById("res");

function verificarConfirmacao() {
  var habSim = document.getElementById("txtsim");
  var habNao = document.getElementById("txtnao");
  if (habSim.checked) {
    return (habilitado = true);
  } else if (habNao.checked) {
    return (habilitado = false);
  }
}

function dirigir() {
  var txtidade = document.getElementById("itxtidade");
  var idade = Number(txtidade.value);
  var res = document.getElementById("res");

  if (idade >= 18 && habilitado) {
    res.innerHTML = `<p>Você tem ${idade} anos idade <br> Possui carteira de motorista <br> Logo você <span id="green">pode</span> dirigir.</p>`;
  } else if (idade > 18 && !habilitado) {
    res.innerHTML = `<p>Você tem ${idade} anos de idade <br> <span id="red">Não</span> possui carteira de motorista <br> Logo <span id="red">não</span> pode dirigir.</p>`;
  } else {
    res.innerHTML = `<p>Você tem ${idade} anos de idade <br> <span id="red">Não</span> pode possuir carteira de motorista <br> Logo você <span id="red">não</span> pode dirigir</p>`;
  }
}
