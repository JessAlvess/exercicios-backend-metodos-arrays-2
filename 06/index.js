const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const filtrarCidades = () => {
    return cidades.filter((cidade) => {
        return cidade.length < 9
    }).join(', ')
}

console.log(filtrarCidades());