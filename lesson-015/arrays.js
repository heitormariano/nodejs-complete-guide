// map() Method
// Mapping an array of numbers to an array of square roots

const numbers = [1, 4, 9, 16];

const roots = numbers.map((elem) => {
    return Math.sqrt(elem);
});

console.log(roots);

const hobbies = ['Sports', 'Cooking'];
newArray = hobbies.map(hobby => 'Hobby: ' + hobby);
console.log(newArray);

const numbersTwo = [1, 2, 3, 4];
newNumbers = numbersTwo.map(number => number * 2);
console.log(newNumbers);