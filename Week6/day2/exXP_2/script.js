
const userForm = document.getElementById('userForm');
console.log(userForm);

const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput, lastNameInput);

const inputsByName = document.getElementsByName('firstname');
console.log(inputsByName);

userForm.addEventListener('submit', function (event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    if (firstNameValue !== '' && lastNameValue !== '') {
        const firstNameLi = document.createElement('li');
        firstNameLi.textContent = firstNameValue;

        const lastNameLi = document.createElement('li');
        lastNameLi.textContent = lastNameValue;

        const usersAnswerList = document.querySelector('.usersAnswer');
        usersAnswerList.innerHTML = ''; 
        usersAnswerList.appendChild(firstNameLi);
        usersAnswerList.appendChild(lastNameLi);
    }
});
