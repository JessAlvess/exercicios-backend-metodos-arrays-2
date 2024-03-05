const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const validarArray = (array) => {
    const test = array.every((element) => {
        return element.length <= 5
    })
    if (!test) {
        return `existe palavra inválida`
    } else {
        return `array validado`
    }
}

console.log(validarArray(palavras))

