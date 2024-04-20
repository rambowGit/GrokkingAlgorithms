// const numberArray = [1, 3, 5, 7, 9];
const stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;
}

const result = binarySearch(stringArray, 'g');
console.log(result);
