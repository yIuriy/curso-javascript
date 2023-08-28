function fatorial(n1){
  var c = n1
  var f = 1 
    while (c > 0){
        f = f * c
        c--
    }
    return f
}

console.log(fatorial(5))