function optimizedBubbleSort(array, ascending = true) {
    if (!Array.isArray(array) || array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < array.length - 1 - i; j++) {
            const shouldSwap = ascending ? array[j] > array[j + 1] : array[j] < array[j + 1];
            if (shouldSwap) {
                const tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return array;
}

function insertionSort(array, ascending = true) {
    if (!Array.isArray(array) || array.length <= 1) {
        return array;
    }

    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;

        while (j >= 0 && (ascending ? array[j] > key : array[j] < key)) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
}

function selectionSort(array, ascending = true) {
    if (!Array.isArray(array) || array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length - 1; i++) {
        let targetIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            const shouldUpdate = ascending
                ? array[j] < array[targetIndex]
                : array[j] > array[targetIndex];

            if (shouldUpdate) {
                targetIndex = j;
            }
        }

        if (targetIndex !== i) {
            const tmp = array[i];
            array[i] = array[targetIndex];
            array[targetIndex] = tmp;
        }
    }

    return array;
}

const arr1 = [5, 2, 8, 1, 9];
optimizedBubbleSort(arr1, true);
console.log(arr1);

const arr2 = [5, 2, 8, 1, 9];
insertionSort(arr2, false);
console.log(arr2);

const arr3 = [5, 2, 8, 1, 9];
selectionSort(arr3, true);
console.log(arr3);
