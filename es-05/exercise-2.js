// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (true) {
    case role === 'ceo':
      console.log("Your Salary is 2200")
      break;

      case role === 'manager' || 'cto':
        console.log("Your salary is 1800")
        break;

      case role === 'developer':
        console.log("Your salary is 1500")  
        break;

      default:
        console.log("Your salary is 1000")  
        break;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);