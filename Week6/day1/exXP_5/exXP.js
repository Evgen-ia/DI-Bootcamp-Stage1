
const container = document.getElementById("container");
// console.log(container);

const firstListFirstLi = document.getElementById("1");
firstListFirstLi.textContent = "Richard";
    

const secondListSecondLi = document.querySelector('.list:nth-child(3) li:nth-child(2)');
// console.log(secondListSecondLi);
secondListSecondLi.remove();

const listItems = document.querySelectorAll('.list li:first-child');
    listItems.forEach(item => item.textContent = "Jane");

const allLists = document.querySelectorAll('.list');
allLists.forEach(list => list.classList.add('student_list'));

allLists[0].classList.add('university', 'attendance');

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const danLi = document.querySelector('ul:nth-child(3) li:last-child');
console.log(danLi)
danLi.style.display = "none";

const richardLi = document.querySelector('ul.list:nth-child(2) li:nth-child(2)');
richardLi.style.border = "1px solid black";

document.body.style.fontSize = "16px";

// Bonus 

if (container.style.backgroundColor.toLowerCase() === "lightblue") {
    const users = Array.from(allLists).flatMap(list => Array.from(list.children).map(li => li.textContent));
    alert(`Hello ${users.join(' and ')}`);
}