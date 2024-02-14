
//             //----- (01) - (The Problem: Repetitive Functions)

// // What if want to copy array and divide by 2?


// const copyArrayAndDivideBy2 = (array) => {
//     const output = [];
//  for (let i = 0; i < array.length; i++) {
//     output.push(array[i] /2);
//  }
//  return output;
// }
// const myArray = [1,2,3]
// const result = copyArrayAndDivideBy2(myArray);



// function userCreator(name, score) {
//    const newUser = {};
//    newUser.name = name;
//    newUser.score = score;
//    newUser.increment = function () {
//       newUser.score++;
//    };
//    return newUser;
// };

// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// user1.increment()



               //----- (02) - (Generalizing Functions)


// We could generalize our function so that we pass in our
// specific instruction only when we run the
// copyArrayAndManipulate function!
// const copyArrayAndManipulate = (array, instructions) => {
//    const output = [];
//    for (let i = 0; i < array.length; i++) {
//       output.push(instructions(array[i]));
//    }
//    return output;
// }
// const multiplyBy2 = (input) => {
//    return input * 2;
// }
// const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);



               //----- (03) - (Arrow & Anoymous functions)


// // Arrow function in ES2015

// const multiplyBy2 = (input) => { return input * 2 };

// So where the function is a single expression to evaluate and then return,
// ES2015 lets us remove the {} and return keyword 

// const multiplyBy2 = ( input ) => input * 2;
// const output = multiplyBy2(3);

// We can even remove the parenthesis if there's only 1 parameter (expected input) 

// const multiplyBy2 = input => input *2;

// const output = multiplyBy2(3);   // 6
