
//                     //----- (01) - (Closure)

// // Reminding ourselves of how functions actually work


// const multiplyBy2 = inputNumber => inputNumber * 2;
// const output = multiplyBy2(7);
// const newOutput = multiplyBy2(3);

// /*  No memory of the previous execution - imagine if we
// could give our functions permanent memories
// It begins with returning a function from a function */


//                     //  (02)


// // Let's call (run) our generated function with the input 3


// const functionCreator = () => {
//     let counter = 0
//     const add3 = (num) => {
//         const result = num + 3
//         return result
//     }
//     return add3
// }
// const generatedFunc = functionCreator()
// const result = generatedFunc(2) //5



//                     //----- (02) - (Inner Function)


// // Calling a function inside the function call in which it was defined

// const outer = () => {
//     let counter = 0;
//     const incrementCounter = () => {
//         counter++;
//     }
//     incrementCounter();
// }
// outer();

// /*  What determines what data your function have access to
// when you call the function? Where we call it?   */



//                     //----- (03) - (Outer Function)


// /*  Now we can call the function that was originally saved as
// incrementCounter by its new global label newFunction    */


// const outer = () => {
//     let counter = 0;
//     const incrementCounter = () => {
//         counter++;
//     }
//     return incrementCounter
// }
// const newFunction = outer();
// newFunction()
// newFunction()

// // But we have a problem