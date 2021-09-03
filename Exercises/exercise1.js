//Implemente a uma função  par_impar  que recebe um inteiro como argumento e retorna "Par" para números pares ou "Ímpar" para números ímpares.
export default function par_Impar(num) {
  if (num % 2 == 0) {
    return `${num} é par`
  }
  return `${num} é ímpár`
}
