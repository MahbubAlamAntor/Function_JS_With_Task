function number (numbers){
    let sum = 0;
    for (let i =0; i<numbers.length; i++){
        sum +=numbers[i];
    }
    let result =sum / numbers.length;
    return result
}

const result = number([54,454,847]);
console.log(result)