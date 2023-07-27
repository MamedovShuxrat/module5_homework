
function getSums(arr) {
    let even = [];//четные
    let odd = [];//нечетные
    let zeroNumb = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                even.push(arr[i])
            } else if (arr[i] % 2 === 0) {
                zeroNumb.push(arr[i])
            } else {
                odd.push(arr[i])
            }
        }
    }
    console.log(`Количество нечетных чисел в массиве: ${odd.length}. И они следующие: ${odd}`);
    console.log(`Количество четных чисел в массиве: ${even.length}. И они следующие: ${even}`);
    console.log(`Количество нолей в массиве: ${zeroNumb.length}. И они следующие: ${zeroNumb}`);

}

getSums([323, 434, 34, 35, 45, 23, 2, 5, 6, 7, 8, 79, 8, 9767, 6, 33232, 4, 567687980, 8, 765, 0, 0, 0, 0])