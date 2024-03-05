const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const isEven = () => {
    return numeros.filter((num) => {
        return num % 2 === 0
    })
}

console.log(isEven());