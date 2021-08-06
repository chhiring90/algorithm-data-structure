const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(arr, el) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== el && start <= end) {
        arr[mid] < el ? start = mid + 1 : end = mid - 1;
        mid = Math.floor((start + end) / 2);
    }

    return arr[mid] === el ? mid : -1;
}

const result = binarySearch(arr, 12);
console.log(result)