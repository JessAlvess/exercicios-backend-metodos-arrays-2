const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const ePositivo = () => {
    return numeros.filter((num) => {
        return num > 0
    })
}

console.log(ePositivo());