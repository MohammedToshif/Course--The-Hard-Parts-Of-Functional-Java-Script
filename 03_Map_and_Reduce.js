
// //----- (01) - (Map)


// // Developers tend to call copyArrayAndManipulate, map


// const map = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     return output;
// }
// const multiplyBy2 = input => input * 2
// const result = map([1, 2, 3], multiplyBy2);

// // Let’s diagram it in a different way and talk about the purpose of diagramming


// //----- (02) - (Reduce Introduction)


// // We have already seen ‘reduction’ in action


// const map = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     return output;
// }
// const multiplyBy2 = input => input * 2
// const result = map([1, 2, 3], multiplyBy2);

// // What is map actually doing? (accumulator, push etc)



// //----- (03) - (Reduce Example)


// // This function is known as reduce - it can handle a remarkable range of tasks


// const reduce = (array, howToCombine, buildingUp) => {
//     for (let i = 0; i < array.length; i++) {
//         buildingUp = howToCombine(buildingUp, array[i])
//     }
//     return buildingUp
// }
// const add = (a, b) => a + b
// const summed = reduce([1, 2, 3], add, 0)

// // Should be called ‘reduce from 2 things to 1 repeatedly, inside’



// //----- (04) - (Built-In Array Methods)



// // JavaScript has a built-in version of reduce available to all arrays Reminder of our version of reduce

// const add = (a, b) => a + b
// const summed = reduce([1, 2, 3], add, 0) // summed is 6

// // With the built-in version , the array is inserted into the reduce function
// // automatically as the first input/argument. But they produce the same result

// const add = (a, b) => a + b
// const summed = [1, 2, 3].reduce(add, 0) // summed is 6



                    //----- (05) - (Filter)



// /* In fact we get a number of built-in higher order functions
// in JavaScript
// — map, forEach, filter, flatMap, reduce, reduceRight
// — All ‘iterate’ through each element of the array and run a function on each
//  — But behave differently - MDN guides us */

// const array = [1, 2, 3, 4, 5, 6]
// const greaterThan2 = num => num > 2
// const filteredArray = array.filter(greaterThan2) // [3,4,5,6]



                    //----- (06) - (Chaining Array Methods)



// // And we can ‘chain’ these higher order functions - pass the output of one as the input of the next

// const array = [1, 2, 3, 4, 5, 6]
// const greaterThan2 = num => num > 2
// const add = (a, b) => a + b
// const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add, 0)

// /* — The output of each higher order function (HOF),
// where it’s an array, has access to all the HOFs (map,
// filter, reduce) through the prototype chain */