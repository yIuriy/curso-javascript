var agora = new Date()
var hora = agora.getDate()
console.log(`Agora são exatamente ${hora} horas.`)
if(5 < hora && hora <= 12){
    console.log('Bom dia!')
}else if(hora > 12 && hora <= 18){
    console.log('Boa tarde!')
}else if(hora > 18 && hora <= 23){
    console.log('Boa noite!')
} else{
    console.log('Boa madrugada!')
}