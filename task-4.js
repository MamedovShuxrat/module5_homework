function printNum(start, end) {
    current = start
    function currentAdder() {
        if (current < end) {
            current++
            console.log(current);
        } else {
            clearInterval(intervalId)
            console.log('Всё!!! Парам-парам-пам');
        }
    }
    currentAdder()
    let intervalId = setInterval(currentAdder, 1000)
}

printNum(5, 15)