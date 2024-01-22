// part 1

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.<br>`;
    }

    addIngredients('apple', 'orange', 'carrot');
}

makeJuice('medium');


// part 2

function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredients.join(', ')}.<br>`;
    }

    addIngredients('apple', 'orange', 'carrot');
    addIngredients('banana', 'strawberry', 'spinach');

    displayJuice();
}

makeJuice('large');
