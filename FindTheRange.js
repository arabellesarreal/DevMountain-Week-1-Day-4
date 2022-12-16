let array = [1, 4, 11, 2, 37, 1, -4];
let min = array[0]
let max = array[0]
for(var i = 1; i < array.length+1; i++){
    if(array[i-1] < min){
        min = array[i-1];
    }else if(array[i-1] > max){
        max = array[i-1];
    }
}
console.log(`Min: ${min} + Max: ${max}`)