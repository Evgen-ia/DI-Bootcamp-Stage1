document.addEventListener('DOMContentLoaded', function () {
    // Part 1
    setTimeout(function () {
        alert("Hello World");
    }, 2000);

    // Part 2
    setTimeout(function () {
        const container = document.getElementById('container');
        const paragraph = document.createElement('p');
        paragraph.textContent = "Hello World";
        container.appendChild(paragraph);
    }, 2000);

    // Part 3
    let interval;
    const container = document.getElementById('container');
    const clearButton = document.getElementById('clear');

    function addParagraph() {
        const paragraph = document.createElement('p');
        paragraph.textContent = "Hello World";
        container.appendChild(paragraph);

        if (container.childElementCount === 5) {
            clearInterval(interval);
        }
    }

    interval = setInterval(addParagraph, 2000);

    clearButton.addEventListener('click', function () {
        clearInterval(interval);
    });
});
