const multiply = (x, n) => {
    let res = 1
    for (let i = 0; i < n; i++) {
        res = res * x
    }
    return res
}
console.log(multiply(2, 5))