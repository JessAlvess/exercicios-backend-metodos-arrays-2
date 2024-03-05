const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão", ""]

const validarLista = () => {
    const test = palavras.some((item) => {
        const test = item === 'cerveja' || item === 'vodka'
        return test
    })
    if (test) {
        return `revise sua lista, joão. possui bebida com venda proibida!`
    } else {
        return `tudo certo, vamos as compras!`
    }
}

console.log(validarLista());