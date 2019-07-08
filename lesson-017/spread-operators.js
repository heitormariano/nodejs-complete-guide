const hobbies = ['Sports', 'Cooking'];
const copiedArray = hobbies.slice();

copiedArray.push('Reading');

console.log(hobbies);
console.log(copiedArray);

// spread operator: '[...name_array]'; '{... object}'; 'myFunction(...iterableObj)'
const numbers = [1, 2, 3, 4];
const copiedNumbers = [...numbers]; // like numbers.slice()

console.log(numbers);
console.log(copiedNumbers);

const person = {
    firstName: 'Alex',
    lastaName: 'White',
    age: 36
};

const copiedPerson = { ...person }; // New in ECMAScript 2018. Like Object.assign({}, person)

console.log(person);
console.log(copiedPerson);

person.firstName = 'Jonathan';
console.log(person);
console.log(copiedPerson);

const studentInfos = ['Hector', 32, 'Computing Science'];

const printStudentInfos = function (name, age, course) {
    return `The student informations are: ${name}, ${age}, ${course}`;
};

console.log(printStudentInfos(...studentInfos));

const values = [100, 200];
const sum = (num_01, num_02) => num_01 + num_02;
console.log('The result: ' + sum(...values));
