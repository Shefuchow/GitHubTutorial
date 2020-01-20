// var and hoisting

function getClothing(isCold) {
    if (isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

getClothing(false);
//returns undefined

// Variables declared with let and const eliminate this specific issue 
// of hoisting because they’re scoped to the block, not to the function. 

function getClothing(isCold) {
    if (isCold) {
        const freezing = 'Grab a jacket!';
    } else {
        const hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

getClothing(false);

// Referenced Error: freezing is not defined


// Variables declared with let can be reassigned, but can’t be redeclared in 
// the same scope.
// Variables declared with const must be assigned an initial value, but 
// can’t be redeclared in the same scope, and can’t be reassigned.

//EXAMPLE
const CHARACTER_LIMIT = 255;
const posts = [
    "#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
    "Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
    "I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];
// prints posts to the console
function displayPosts() {
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].slice(0, CHARACTER_LIMIT));
    }
}
displayPosts();

//Template Literals
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
// Denoted with backticks (` `) instead of single quotes ( '' ) or double quotes ( "" ), 
// template literals can contain placeholders which are represented using ${expression}. 
// This makes it much easier to build strings.

const myName = 'gangsta';
const greeting = `Hello, my name is ${myName}`;
console.log(greeting);

// In ES6, you can extract data from arrays and objects into distinct variables using destructuring.

const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);

const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};
const { type, color, carat } = gemstone;
console.log(type, color, carat);

// Object Literal Shorthand
let gemstone = {
    type,
    color,
    carat,
    calculateWorth() {}
};

// The for...of loop is the most recent addition to the family of for loops in JavaScript.
// It combines the strengths of its siblings, the for loop and the for...in loop, to loop 
// over any type of data that is iterable (meaning it follows the iterable protocol.
// forEach() loop is only exclusive for arrays

// Includes the data types String, Array, Map, and Set—notably absent from this list is 
// the Object data type (i.e. {}). Objects are not iterable, by default.


// biggest downside of a for loop is having to keep track of the counter and exit condition.

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
}

// The for...in loop improves upon the weaknesses of the for loop by eliminating the counting 
// logic and exit condition.

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
    console.log(digits[index]);
}

// The for...of loop is used to loop over any type of data that is iterable.

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
    console.log(digit);
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
}

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (day of days) {
    console.log(day[0].toUpperCase() + day.slice(1));
}

// Spread Operator gives ability to expand, or spread, iterable objects into multiple elements.
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

//combining arrays
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];
console.log(produce);

// Rest parameter, ( ... ), allows you to represent an indefinite number of elements as an array.