function evenNumber (number){
    const even = []
    for (const num of number){
        if(num % 2 === 0){
            console.log(num);
            even.push(num);
        }
    }
    return even;
}

const number = [54,857,863,1,2,5,4];
const even = evenNumber(number)
console.log(even);