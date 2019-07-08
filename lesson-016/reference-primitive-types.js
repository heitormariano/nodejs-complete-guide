// primitive types

let name = 'John';
console.log(name);

let secondName = name;
console.log(secondName);

name = 'Max';
console.log(name);

// reference types

let person = {
    name: 'John',
    age: 32,
    hobbies: ['Sports', 'Cooking']
}
console.log(person);

let secondPerson = person;
console.log(secondPerson);

person.name = 'Max'
console.log(secondPerson);

// The Object.assign() method

let student = {
    name: 'Alex',
    course: 'Computer Science',
    disciplines: ['Programming Logic', 'Database']
}
console.log(student);

let secondStudent = Object.assign({}, student);
console.log(secondStudent);

student.name = 'Paul';
console.log(secondStudent);

// playing with arrays
// Arrays are objects - They are examples of the reference types

student.disciplines.push('Operating Systems');
console.log(secondStudent);

let myDisciplines = student.disciplines.slice(0, 2);

console.log(myDisciplines);
console.log(student.disciplines);
console.log(secondStudent.disciplines);

student.disciplines.push('Probability');

console.log(myDisciplines);
console.log(student.disciplines);
console.log(secondStudent.disciplines);

console.log('Type: ' + typeof (student));
console.log('Type: ' + typeof (student.disciplines));
console.log('Type: ' + typeof (myDisciplines));
