
// Ex1

function displayNumbersDivisible(divisor) {
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            // console.log(i);
            sum += i;
        }
    }

    // console.log("Sum:", sum);
}

displayNumbersDivisible(23); 
displayNumbersDivisible(3); 
displayNumbersDivisible(45); 



// Ex2

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalCost = 0;

    for (const item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            totalCost += prices[item];
            stock[item] -= 1; 
        }
    }

    return totalCost;
}

// console.log("Total Bill:", myBill());



// Ex3

function changeEnough(itemPrice, amountOfChange) {
    const quartersValue = 0.25;
    const dimesValue = 0.10;
    const nickelsValue = 0.05;
    const penniesValue = 0.01;

    const totalChange = (amountOfChange[0] * quartersValue) +
                       (amountOfChange[1] * dimesValue) +
                       (amountOfChange[2] * nickelsValue) +
                       (amountOfChange[3] * penniesValue);

    return totalChange >= itemPrice;
}

// console.log(changeEnough(4.25, [25, 20, 5, 0])); // Should return true
// console.log(changeEnough(14.11, [2, 100, 0, 0])); // Should return false
// console.log(changeEnough(0.75, [0, 0, 20, 5])); // Should return true



// Ex4


function hotelCost() {
    let nights;
    do {
        nights = prompt("Enter the number of nights you would like to stay in the hotel:");
        nights = parseInt(nights); 
    } while (isNaN(nights)); 

    return nights * 140; 
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Enter your destination (London, Paris, or other):");
    } while (!destination || (destination !== "London" && destination !== "Paris" && destination.toLowerCase() !== "other"));

    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days;
    do {
        days = prompt("Enter the number of days you would like to rent a car:");
        days = parseInt(days);
    } while (isNaN(days));

    let cost = days * 40; 

    if (days > 10) {
        cost *= 0.95;
    }

    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const planeTickets = planeRideCost();
    const carRental = rentalCarCost();

    const totalCost = hotel + planeTickets + carRental;

    console.log(`car: $${carRental}, hotel: $${hotel}, plane: $${planeTickets}.`);

    return totalCost;
}

console.log("Total Vacation Cost:", totalVacationCost());

