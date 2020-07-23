/*
    doSomething(array, actionFunction);
*/

fruits = [
    "pear",
    "apple",
    "orange",
    "watermelon"
];

let append = (item) => {
    return "7" + item;
};

let index = 0;
let doSomething = (array, action) => {
    array.forEach(item => {
        array[index++]  = action(item);
    });
};

doSomething(fruits, append);
console.log(fruits);