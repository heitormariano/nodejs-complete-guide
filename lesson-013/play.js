// play.js code adapted/updated
let name = 'John';
let age = '42';
let hasHobbies = true;


const summarizeUser = function (userName, userAge, userHasHobby) {
    return `User name: ${userName} - User Age: ${userAge} - User Has Hobbies: ${userHasHobby}`;
};

console.log(summarizeUser(name, age, hasHobbies));