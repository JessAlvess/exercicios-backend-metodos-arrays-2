const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

const validarMotoristas = () => {
    const motoristas = usuarios.filter((motorista) => {
       return motorista.idade > 17 && motorista.idade < 66
    })
    const test = motoristas.every((motorista) => {
        return motorista.habilitado
    })
    if (test) {
        return `todos passaram no teste`
    } else {
        return `todos precisam estar habilitados`
    }
}

console.log(validarMotoristas());