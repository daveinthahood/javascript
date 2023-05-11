const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}



// Print values of person using Object.keys
//facciamo un ciclo for andando a richiamare le key ed i valori ed usiamo Object.entries che ci stamperà sia le keys sia i valori

for (const [key, value] of Object.entries(person)){
  console.log(`${key}: ${value}`);
}


