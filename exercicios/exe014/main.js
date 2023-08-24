function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`


  if (hora >= 0 && hora < 12){
    img.src = "imagens/manha-circular.jpg"
    document.body.style.background = "#EAC99E"
    //Bom dia 
  }
  else if(hora >= 12 && hora <= 18){
    img.src = "imagens/tarde-circular.jpg"
    document.body.style.background = "#E18C3B"
    //Boa tarde 
  }
else{
    img.src = "imagens/noite-circular.jpg"
    document.body.style.background = "#1B323A"
    //Boa noite 
}

}
