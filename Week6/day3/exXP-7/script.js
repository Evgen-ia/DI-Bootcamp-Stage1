(function (userName) {
    const navbar = document.getElementById('navbar');
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-info');

    const userProfilePicture = document.createElement('img');
    userProfilePicture.src = 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'; 

    const userNameElement = document.createElement('span');
    userNameElement.textContent = `Welcome, ${userName}!`;

    userDiv.appendChild(userProfilePicture);
    userDiv.appendChild(userNameElement);
    navbar.appendChild(userDiv);
})('John');
