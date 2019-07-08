const person = {
    name: 'John',
    age: 39,
    greet: function () {
        console.log('Hi, I am ' + this.name)
    }
};

console.log(person);
person.greet();

