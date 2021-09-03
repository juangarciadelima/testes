import par_Impar from './Exercises/exercise1.js'
import temMenorDeIdade from './Exercises/exercise2.js'
import CheckGen from './Exercises/exercise3.js'
import test from './Exercises/exercise4.js'

function padronizador(text, func) {
  return console.log(text, func)
}

//Destructuring assignment
let firstMember, secondMember, rest
;[firstMember, secondMember, ...rest] = [1, 2, 3, 4, 5]
console.log(firstMember)
console.log(secondMember)
console.log(rest)

//Spreading

const person = {
  nome: 'João',
  sobrenome: 'Paiva',
  moradia: 'Porto Verde',
  EstadoCivil: 'Solteiro',
  CPF: 10022233344,
  idade: 14
}
padronizador('Caso 1 - Spreading - ', person)

const newPerson = {
  ...person,
  nome: 'Carlos',
  sobrenome: 'Massa',
  idade: 23
}
padronizador('Caso 2 - Spreading - ', newPerson)

// Exercício 1 - JS
padronizador('Exercício 1 - (Caso 1)', par_Impar(4))
padronizador('Exercício 1 - (Caso 2)', par_Impar(1))

// ------------------------------------------------------------------------------ //
//Exercício 2 - JS

let ListaDePessoas = [
  { nome: 'vitoria', idade: 12 },
  { nome: 'bia', idade: 18 },
  { nome: 'henrique', idade: 21 },
  { nome: 'gabriel', idade: 22 },
  { nome: 'joão', idade: 100 },
  { nome: 'giovana', idade: 21 },
  { nome: 'marcelo', idade: 90 }
]

let ListaDePessoas2 = [
  { nome: 'vitoria', idade: 21 },
  { nome: 'bia', idade: 19 },
  { nome: 'henrique', idade: 21 },
  { nome: 'gabriel', idade: 22 },
  { nome: 'joão', idade: 100 },
  { nome: 'giovana', idade: 21 },
  { nome: 'marcelo', idade: 90 }
]
padronizador('Exercício 2 - Caso 1', temMenorDeIdade(ListaDePessoas))
padronizador('Exercício 2 - Caso 2', temMenorDeIdade(ListaDePessoas2))

// ------------------------------------------------------------------------------ //
// //Exercício 3 - JS

let personsList = [
  { nome: 'Carlos', genero: 'h' },
  { nome: 'Gabriel', genero: 'h' },
  { nome: 'Henrique', genero: 'h' },
  { nome: 'Carlos', genero: 'm' },
  { nome: 'Gabriel', genero: 'm' },
  { nome: 'Henrique', genero: 'm' }
]
padronizador('Exercício 3 - ', CheckGen(personsList))
// ------------------------------------------------------------------------------ //
//Exercício 4 - JS

let persons = [
  { nome: 'henrique', idade: 33 },
  { nome: 'Bia', idade: 21 },
  { nome: 'Roberto', idade: 60 },
  { nome: 'Rodolfo', idade: 33 },
  { nome: 'Maicon', idade: 22 }
]
padronizador('Exercício 4 -', test(persons))
// ------------------------------------------------------------------------------ //
//Exercício 5 - JS
