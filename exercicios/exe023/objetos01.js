let amigo = {
    nome: "José",
    sexo: "M",
    peso: 67.8, 
    engordar(p){
        console.log("Engordou")
        this.peso += p
    }
}  

amigo.engordar(4)
console.log(`${amigo.nome} engordou pesa ${amigo.peso}`)

 