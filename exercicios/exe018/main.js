var txtvalor = document.getElementById("valor");
var txtlimite = document.getElementById("limite");
var btn = document.getElementById("btn");
var res = document.getElementById("res");

function tabuada() {
  res.innerHTML = "";
  var valor = Number(txtvalor.value);
  var limite = Number(txtlimite.value);
  res.innerHTML += `<th>Tabuada do ${valor}</th>`;
  if (limite == "" || limite == null) {
    limite = 10;
  }
  if (valor == "" || valor == null) {
    res.innerHTML = "Insira um valor!";
  } else {
    for (var c = 0; c < limite + 1; c++) {
      var tabuada = valor * c;
      res.innerHTML += `<td>${valor} x ${c} = ${tabuada}</td>`;
    }
  }
}
