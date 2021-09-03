//Implemente a função temMenorDeIdade que recebe uma lista como argumento e deve retornar true se tiver alguem menor de idade na lista ou false se não tiver alguem menor de idade na lista
export default function temMenorDeIdade(lista) {
  for (let i = 0; i < lista.length; i++) {
    const ages = lista[i].idade
    if (ages < 18) {
      return true
    }
  }
  return false
}
