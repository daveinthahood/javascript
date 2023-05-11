function multiplyByTwo(value) {
  let number = 2;
  function inner(){ //creo la funzione inner che mi farà ritornare il valore moltiplicato per il numero 
    return value * number
  }
  return inner //Se non facciamo il return dell'inner la funzione nel console log non funziona 
}


console.log(multiplyByTwo(4)())