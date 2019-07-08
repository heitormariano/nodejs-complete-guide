let name = 'John';
let age = '42';
let hasHobbies = true;

// function - traditional way to use
let summarizeUser = function (userName, userAge, userHasHobby) {
    return `User name: ${userName} - User Age: ${userAge} - User Has Hobbies: ${userHasHobby}`;
};
console.log(summarizeUser(name, age, hasHobbies));

// arrow function form
summarizeUser = (userName, userAge, userHasHobby) => {
    return `User name: ${userName} - User Age: ${userAge} - User Has Hobbies: ${userHasHobby}`;
}
console.log(summarizeUser(name, age, hasHobbies));

// Other Exemples

// function
let getWordLenght = function (word) {
    return word.length
};
console.log(`Length 'professor' word: ${getWordLenght('professor')}`);

// arrow function
getWordLenght = (word) => {
    return word.length;
};
console.log(`Length 'professor' word: ${getWordLenght('professor')}`);

// When there is only one parameter, we can remove the surrounding parenthesies
getWordLenght = word => {
    return word.length;
};
console.log(`Length 'professor' word: ${getWordLenght('professor')}`);

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly braces
getWordLenght = word => word.length;
console.log(`Length 'professor' word: ${getWordLenght('professor')}`);

// function without arguments
let addRandom = function () {
    return 10 + 10;
};
console.log(`Result: ${addRandom()}`);

// arrow function
addRandom = () => 10 + 10;
console.log(`Result: ${addRandom()}`);