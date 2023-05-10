const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
// Modifichiamo il firstName di person due andando a richiamare la chiave ed assegnandogli un nuovo nome 

person2.firstName="Simon";
//Facendo l'output vediamo che il nome anche di person1 è cambiato visto che abbiamo creato person2 rendendolo ugule a person1, quindi le due variabili risultano legate tra loro e cambiandone una cambia anche laltro


console.log(person1);
console.log(person2);
