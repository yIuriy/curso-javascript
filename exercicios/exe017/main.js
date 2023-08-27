var txtinicio = document.getElementById("inicio");
var txtfim = document.getElementById("fim");
var txtpasso = document.getElementById("passo");

var btn = document.getElementById("btn");
var res = document.querySelector("div#res");

function contar() {
  res.innerHTML = "";
  var inicio = Number(txtinicio.value);
  console.log(inicio);
  var fim = Number(txtfim.value);
  console.log(fim);
  var passo = Number(txtpasso.value);
  console.log(passo);
  if (passo == 0) {
    window.alert("Passo inválido! Passo considera será 1.");
    passo = 1;
  }
  if (passo == "" || passo == null) {
    res.innerHTML = "Impossível contar";
  } else if (fim == "" || fim == null) {
    res.innerHTML = "Impossível contar";
  } else if (passo == 0) {
    window.alert("Passo inválido! Passo considerado será 1.");
    passo = 1;
  } else {
    if (inicio <= fim) {
      while (inicio <= fim) {
        res.innerHTML += ` ${inicio} →`;
        inicio += passo;
      }
      res.innerHTML += " Fim!";
    }
  }
}
