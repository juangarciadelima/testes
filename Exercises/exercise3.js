// Você tem uma lista de pessoas que entraram numa festa essa lista contem homens e mulheres implemente uma função que recebe uma lista de pessoas como argumento e  retorne um objeto com os homens separado das mulheres

export default function checkGen(lista) {
  let homensEmulheres = {
    homens: [],
    mulheres: []
  }

  for (let i = 0; i < lista.length; i++) {
    let genero = lista[i].genero
    if (genero == 'h') {
      homensEmulheres.homens.push(lista[i])
    } else {
      homensEmulheres.mulheres.push(lista[i])
    }
  }
  return homensEmulheres
}
