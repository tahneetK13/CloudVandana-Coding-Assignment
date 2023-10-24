// Perform sorting of an array in descending order. 
let numbers = [5, 2, 8, 1, 4];
function bubbleSortDescending(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap 
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let sortedDescending = bubbleSortDescending(numbers);

console.log(sortedDescending);
