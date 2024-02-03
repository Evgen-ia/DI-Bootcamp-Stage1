// ex2

function displayStudentInfo(objUser){
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// Output: 'Your full name is Elie Schoppik'


// ex3

const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);

const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);

console.log(modifiedUsersArray);

// ex4   Output: 'object'

// ex5

// Option 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

  
// ex6

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    constructor(name, type, color) {
      super(name, type, color);
    }
  
    sound(noise) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}\n${noise}`;
    }
  }
  
  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  console.log(farmerCow.sound('Moooo'));
  


  
