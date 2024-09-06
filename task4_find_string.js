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