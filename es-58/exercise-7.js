class Person {
  _firstName;
  _lastName;
  _age;

 constructor(firstName, lastName, age) {
  this._firstName = firstName;
  this._lastName = lastName;
  this._age = age;
 }
 //GET AND SET DI FULL NAME
 get firstName(){
  return this._firstName
 }
 set firstName(firstName){
  return this._firstName = firstName
 }

 //GET AND SET DI LAST NAME
 get lastName(){
  return this._lastName
 }

 set lastName(lastName) {
  return this._lastName = lastName
 }
 // GET AND SET DI AGE 
 get age(){
  return this._age
 }

 set age(age){
  return this._age = age
 }

 get fullName (){
  return `${this._firstName} ${this._lastName}`
 }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);