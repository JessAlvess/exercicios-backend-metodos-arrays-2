const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Guerra e Paz";

const acharLivro = (livro) => {
    return `O livro está na posição ${livros.indexOf(livro) + 1}`
}

console.log(acharLivro(nomeDoLivro));