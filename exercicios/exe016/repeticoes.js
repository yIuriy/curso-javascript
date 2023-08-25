function linha() {
  console.log("--------------------------------");
}

console.log("Estrutura While");
var cont = 1;
while (cont <= 10) {
  var n = 6;
  var mult = n * cont;
  console.log(mult);
  cont++;
}

linha();

console.log("Estrutura Do While");
var cont1 = 1;
do {
  var n1 = 7;
  var mult1 = n1 * cont1;
  console.log(mult1);
  cont1++;
} while (cont1 <= 10);

linha();

console.log("Estrutura For");
for (var cont2 = 1; cont2 <= 10; cont2++) {
  var n2 = 8;
  var mult2 = n2 * cont2;
  console.log(mult2);
}

