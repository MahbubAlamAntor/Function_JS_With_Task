
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.



function str (number){
    let sum = 0;
    for (let numbe of number){
        if(numbe === "0"){
        sum = sum+1;
        }
        
    }
    return sum;
}

const result = str("56464000212000");
console.log(result)