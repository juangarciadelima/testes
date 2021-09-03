// Você é dono de uma Seguradora de Carros e recebe uma lista de pessoas contendo o nome e idade
// voce deve clasificar o tipo  de seguro atravez da idade da pessoa
// pessoas com idade entre 21 anos e 30 tem o tipo de seguro C
// pessoas com idade entre 31 anos e 59 tem o tipo de seguro B
// pessoas com idade entre 60 anos e 80 tem o tipo de seguro A
// sua função deve retornar  a lista de pessoas, mas agora cada pessoa deve conter um propriedade a mais chamada tipoDeSeguro
// que contem a classificação do tipo de seguro

//  21 - 30 => Seguro Tipo C  // 31 - 59 => Seguro Tipo B // 60 - 80 -> Seguro Tipo A

export default function test(li) {
  for (let i = 0; i < li.length; i++) {
    const age = li[i].idade

    if (age >= 60) {
      li[i]['tipoDeSeguro'] = 'A'
    } else if (age >= 31) {
      li[i]['tipoDeSeguro'] = 'B'
    } else if (age >= 21) {
      li[i]['tipoDeSeguro'] = 'C'
    }
  }

  return li
}
