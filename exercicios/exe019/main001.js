function print(a) {
  console.log(a);
}

// [...num] (Cria cópia)

let num = [587, 85, 42, 51]; //Cria uma array
print(num);

num[4] = 9; //Cria e adiciona um elemento no índice 4
print(num);

num.push(3) //Adiciona um elemento no final
print(num)

num.pop() // Remove o último elemento
print(num)

num.shift() // Remove o primeiro elemento
print(num)

num.unshift(2) // Adiciona uma elemento no início
print(num)

num.splice(3 , 4 , 6) // Adiciona em posição específica
print(num)

print(num.length) // Retorna o número de elementos

print(num.sort()) // Coloca em ordem crescente com base no primeiro algarismo

print(num.sort((a, b) => a - b)); // Ordem crescente verdadeira

print(num.sort((a, b) => b - a)) // Ordem decrescente

print(num[0]) // Printa o primeiro elemento