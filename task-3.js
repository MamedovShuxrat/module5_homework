function getSumsOnNumb(numb) {
    return function (numb) {
        return numb + numb
    }
}

let res = getSumsOnNumb()
console.log(res(12));