
const sum = (a, b) => a + b;//parametri ed argomenti 

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;
const result = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
//(2,4) (5,2) 2, 5 sono i valori che diamo 

console.log(result);