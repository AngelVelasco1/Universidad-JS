/* Es un ciclo que repite el codigo hasta que la condicion entre parentesis sea falsa */
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
console.log("End while loop")


/* Advanced Example - Binary Search */
function binarySearch(array, target) {

    let left = 0;
    let right = array.length -1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log(mid)
        if (array[mid] === target ) {
            return mid;
        }
        else if (array[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid -1;
        }
    }
    return -1;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let target = 4;

let resultNumber = binarySearch(array, target) + 1;
let resultIndex = binarySearch(array, target);

if(resultIndex === -1) {
    console.log("The target number is out of range, can't find the value")
} else {
    console.log(`The target number is ${resultNumber} and her index is ${resultIndex}`)
}
