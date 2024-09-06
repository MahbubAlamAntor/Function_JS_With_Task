function numbers (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number
    }
    return sum;
}

const numrs = [45,77,9];
const sum = numbers(numrs)
console.log("sum number is :", sum)