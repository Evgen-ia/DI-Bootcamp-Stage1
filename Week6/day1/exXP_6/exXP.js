
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");
console.log(navBar)

const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
// const ulElement = document.querySelector('ul');
// console.log(fullList)

const ulElement = navBar.firstElementChild; 
ulElement.appendChild(newLi);

const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

console.log("Text of the first link:", firstLi.textContent);
console.log("Text of the last link:", lastLi.textContent);
