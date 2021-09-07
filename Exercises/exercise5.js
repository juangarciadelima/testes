//Exercício 5 - JS

// implemente a função alunosAprovados
// essa função recebe uma lista de alunos com o nome e a suas 3 notas na disciplina de programação
// a nota final é a média aritmética das 3 notas obtidas
// para um aluno ser aprovado sua nota final deve ser maior ou igual a 6
// essa função deve retornar uma lista com todos os alunos aprovados na disciplina e sua respectiva nota final

export default function alunosAprovados(lista) {
  let alunosAprovados = []
  for (let i = 0; i < lista.length; i++) {
    let media = lista[i].notas.reduce(function (total, item, i, array) {
      total = total + item

      if (i == array.length - 1) {
        return total / array.length
      }

      return total
    })
    if (media >= 6) {
      let aluno = {
        nome: lista[i].nome,
        nota: Math.round(media)
      }
      alunosAprovados.push(aluno)
    }
  }
  return alunosAprovados
}
