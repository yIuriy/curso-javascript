function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var fSex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("width", "250px");

    if (fSex[0].checked) {
      genero = "um Homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "imagens/kid-m.png");
      } else if (idade < 20) {
        //jovem
        img.setAttribute("src", "imagens/young-m.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "imagens/adult-m.png");
      } else {
        //idoso
        img.setAttribute("src", "imagens/old-m.png");
      }
    } else if (fSex[1].checked) {
      genero = "uma Mulher";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "imagens/kid-f.png");
      } else if (idade < 20) {
        //jovem
        img.setAttribute("src", "imagens/young-f.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "imagens/adult-f.png");
      } else {
        //idoso
        img.setAttribute("src", "imagens/old-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
