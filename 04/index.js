const numeros = [0, 122, 4, 6, 7, 8, 44]

const isEven = () => {
    const test = numeros.every((num) => {
        return num % 2 === 0 
    })
    if (test) {
        return `array válido`
    } else {
        return `array inválido`
    }
}

console.log(isEven());