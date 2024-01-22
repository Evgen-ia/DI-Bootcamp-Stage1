// ex2
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);


// ex3
const isString = (value) => typeof value === 'string';
console.log(isString([1, 2, 4, 0]));

// ex4

const sum = (num1, num2) => num1 + num2;


// ex5
// Function Declaration
function kgToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
  }
  console.log(kgToGramsDeclaration(2)); // Output: 2000
  

// Function Expression
const kgToGramsExpression = (weightInKg) => weightInKg * 1000;

console.log(kgToGramsExpression(2)); // Output: 2000
  



