var txtinicio = document.getElementById("inicio");
var txtfim = document.getElementById("fim");
var txtpasso = document.getElementById("passo");

var btn = document.getElementById("btn");
var res = document.querySelector("div#res");

function contar() {
  res.innerHTML = "";
  var inicio = Number(txtinicio.value);
  var fim = Number(txtfim.value);
  var passo = Number(txtpasso.value);
  if (inicio <= fim) {
    while (inicio <= fim) {
      res.innerHTML += ` ${inicio} →`;
      inicio += passo;
    }
    res.innerHTML += " Fim!";
  }
}
