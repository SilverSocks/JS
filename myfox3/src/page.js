const s = Array(100).fill(null).map(() => Math.floor(Math.random() * 200) - 100);
console.log(s);
console.log(bubbleSort(s));

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                const f = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = f;
            }
        }
    }
    console.log(arr);

}

console.log(choiceSort(s));

function choiceSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        let max = -Infinity;
        let index = null;

        for (let i = 0; i < arr.length - j; i++) {
            if (arr[i] > max) {
                max = arr[i];
                index = i;
            }
        }
        let f = arr[arr.length - 1 - j];
        arr[arr.length - 1 - j] = max;
        arr[index] = f;

    }
    return arr;
}

console.log(insertionSort(s));

function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        while (i + 1 !== 0 && arr[i + 1] < arr[i]) {
            let f = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = f;

        }
    }
    return arr;
}

const q_sort = s.sort((a, b) => a - b);
console.log(q_sort);

console.log(quickSort(s));

function quickSort(arr) {
    const index = Math.floor(Math.random() * arr.length);
    const currentItem = arr[index];
    const more = [];
    const less = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) continue;
        if (arr[i] > currentItem) more.push(arr[i])
        else less.push(arr[i]);

    }
    return [
        ...less,
        currentItem,
        ...more];
}

function mergeSort(arr){
    const left = arr.slice(0, arr.length / 2);
    const right = arr.slice(arr.length / 2, arr.length);

    let i = 0, j = 0;
    const sorted_array = [];
    while (i < left.length && j < right.length) {
        if (left[i] === right[j]) {
            sorted_array.push(left[i], right[j]);
            i++;
            j++;
        } else if (left[i] < right[j]) {
            sorted_array.push(left[i])
            i++;
        } else {
            sorted_array.push(right[j]);
            j++;
        }
    }
    if (i !== left.length) {
        return sorted_array.concat(left.slice(i, left.length));
    } else if (j !== right.length) {
        return sorted_array.concat(right.slice(j, right.length));
    }
    return sorted_array;
}
console.log(mergeSort(s));