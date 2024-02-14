
//----- (01) - (Function Decoration Introduction)


// /*  To add a permanent memory to an existing function we have to create a new
// function that will run the existing function inside of itself   */


// const oncify = (convertMe) => {
//     let counter = 0
//     const inner = (input) => {
//         if (counter === 0) {
//             const output = convertMe(input)
//             counter++
//             return output
//         }
//         return "Sorry"
//     }
//     return inner
// }
// const multiplyBy2 = num => num * 2
// const oncifiedMultiplyBy2 = oncify(multiplyBy2)
// oncifiedMultiplyBy2(10) // 20
// oncifiedMultiplyBy2(7) // Sorry



//----- (02) - (Partial Application Example)


// // It’s known as ‘Partial application’


// const multiply = (a, b) => a * b
// function prefillFunction(fn, prefilledValue) {
//     const inner = (liveInput) => {
//         const output = fn(liveInput, prefilledValue)
//         return output
//     }
//     return inner
// }
// const multiplyBy2 = prefillFunction(multiply, 2)
// const result = multiplyBy2(5)

// console.log(result);