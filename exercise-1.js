function sum(...value) {
    return value.reduce((prev, curr) => {
        return prev + curr
    })
}

console.log(sum(1, 2, 3, 4, 5));