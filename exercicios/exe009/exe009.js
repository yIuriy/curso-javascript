var idade = 16   
 var habilitacao = !true
 if (idade >= 18 && habilitacao){
    console.log(`Você tem ${idade} anos e carteira de motorista, logo você pode dirigir.`)
 } 
 else if(idade > 18 && !habilitacao){
     console.log(`Você tem ${idade} anos, porém não possui carteira de motorista, logo não pode dirigir.`)
 } else{
     console.log(`Você tem ${idade} anos e não tem carteira de motorista, logo você não pode dirigir.`)
 }