// rest operator
const sum = (...args) => {
    let sum = 0;
    args.forEach((elem) => {
        sum += elem;
    });
    return sum;
};

let result = sum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(`The result is: ${result}`);


// rest operator - second example
const printElements = (...args) => {
    return args;
};
console.log(printElements(10, 20, 30, 40, 50));