function chechNumber(num) {
    if (num <= 1 || num > 1000) {
        return 'Данные не верны!'
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 'не является простым числом'
        }
    }
    return 'простое число'
}

console.log(chechNumber(125))