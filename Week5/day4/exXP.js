
const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log("output1, after shift", people)

people[2] = "Jason";

people.push("Evgenia");

console.log(people.indexOf("Mary"));

const peopleCopy = people.slice(1, 3);
console.log("peopleCopy =", peopleCopy)

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];
console.log("last =", last)

// Part 2
for (let person of people) {
  console.log(person);
}

for (let person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}

// Ex2

const colors = ["blue", "red", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${["st", "nd", "rd"][i] || "th"} choice is ${colors[i]}`);
}

// Ex3

let number;
do {
  number = prompt("Enter a number");
} while (Number(number) < 10);

// Ex4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  console.log(building.numberOfFloors);
  console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
  console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
  const sumOfRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
  if (sumOfRent > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }

// Ex5
const family = {
    father: "John",
    mother: "Jane",
    son: "Jack",
    daughter: "Jill",
  };
  
  for (let key in family) {
    console.log(key);
  }
  
  for (let value in family) {
    console.log(family[value]);
  }

// Ex6 

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let sentence = "";
  for (let key in details) {
    sentence += details[key] + " ";
  }
  console.log(sentence.trim());
  
  
// Ex7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretSocietyName = names.map(name => name[0]).sort().join("");
console.log(secretSocietyName);

