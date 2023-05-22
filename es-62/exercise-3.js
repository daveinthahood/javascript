function isAdult({age}) { //andiamo a cambiare il parametro della funzione correggendolo da person ad age, se il return sarà verificato darà true
  return age >=18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));