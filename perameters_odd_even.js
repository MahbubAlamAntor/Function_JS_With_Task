function strSize (str){
    const size = str.length
    console.log(size);
    if(size %2 === 0){
        console.log('even')
        return true;
    }
    else{
        console.log("odd")
        return false;
    }
}
strSize('Dhaka');
strSize('Alam');


function numbers (num1, num2){
    if(num2 === true){
        const result = num1 * 3;
        return result;
    }
    else{
        const result = num1 * 5;
        return result;
    }
}
console.log(numbers(2,true))
console.log(numbers(2,false))


function arrys (numing){
    const numr = numing.length;
    return numr;
}
arrys([45,87,865,7,87]);