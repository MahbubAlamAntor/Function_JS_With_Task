function numbers (number){
    if(number % 2===0){
        result = number * 2;
    }
    else{
        result = number / 2;
    }
    return result;
}
const result0 = numbers(51);
const result1 = numbers(50);
console.log(result0)
console.log(result1)