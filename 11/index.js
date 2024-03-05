const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const nomeComA = () => {
    return nomes.filter((nome) => {
        return nome[0] === 'a' || nome[0] === 'A'
    })
  }

  console.log(nomeComA());