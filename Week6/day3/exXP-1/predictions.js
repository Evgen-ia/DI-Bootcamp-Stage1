// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne(); // The alert will display "inside the funcOne function 3".

// #1.2 What will happen if the variable is declared with const instead of let?
// You can't reassign a constant variable, so it will throw an error.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // The alert will display "inside the funcThree function 0".
funcTwo();
funcThree(); // The alert will display "inside the funcThree function 5".

// #2.2 What will happen if the variable is declared with const instead of let?
// You cannot reassign a constant variable, so it will throw an error.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive(); // The alert will display "inside the funcFive function hello" 
            // only if you did not assign 'a' as let or const before that.
            // If you did, 'a' will not change it's value 

// #4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // The alert will display "inside the funcSix function test".

// #4.2 What will happen if the variable is declared with const instead of let?
// It will throw an error because you cannot reassign a constant variable.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// The first alert will display "in the if block 5", and the second alert will display "outside of the if block 2".

// #5.2 with const instead of let?
//It will throw an error because you cannot reassign a constant variable.
