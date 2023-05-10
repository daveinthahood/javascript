// la funzione deve sommare tutti i valori che partono da 0 fino a 5 ed avere come output 15//
//usiamo un ciclo for cosi da partire da 0 ed ogni giro del ciclo aumenta di un valore fino a 5//
function sumUntil(maxValue) {
  let sum = 0;
  for (let index = 0; index <= maxValue; index++) {
    sum += index;
  }
  return sum;
}

console.log(sumUntil(5));