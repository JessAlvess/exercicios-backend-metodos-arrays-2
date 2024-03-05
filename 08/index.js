const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const tranformarArray = () => {
    return frutas.map((fruta) => {
        let stringFruta = fruta.toLowerCase()
        stringFruta = stringFruta[0].toUpperCase() + stringFruta.slice(1)
        return `${frutas.indexOf(fruta)} - ${stringFruta}`
    })
}

console.log(tranformarArray());