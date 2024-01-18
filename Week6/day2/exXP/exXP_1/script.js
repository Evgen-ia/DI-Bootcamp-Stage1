// ex1

const h1Element = document.querySelector('article h1');
console.log(h1Element.textContent);

const paragraphs = document.querySelectorAll('article p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();


const chocolateTitle = document.getElementById('chocolateTitle');
chocolateTitle.addEventListener('click', function () {
    chocolateTitle.style.backgroundColor = 'red';
});


const historyTitle = document.getElementById('historyTitle');
historyTitle.addEventListener('click', function () {
    historyTitle.style.display = 'none';
});

const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', function () {
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
    });
});
