/**
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 * 
 */


function evenOdd(number){
    if(number %2 === 0){
        const result = ('Its Even Number' + number)
        return result;
    }
    else if(number %2 !== 0){
        const result = ('Its Odd Number'+ number)
        return result;
    }
}
const result = evenOdd(50);
console.log(result)



// function evenOdd(number){
//     if(number %2 === 0){
//         console.log("Its Even number", number)
//     }
//     else if(number %2 !== 0){
//         console.log("Its Odd number", number)
//     }
// }

// const result1 = evenOdd(121);
