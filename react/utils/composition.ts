/* eslint-disable @typescript-eslint/restrict-plus-operands */
// Multiple functions into single function

function add(valueA: any, valueB: any) {
  return valueA + valueB
}

function multiply(valueA: any, valueB: any) {
  return valueA * valueB
}

function sub(valueA: any, valueB: any) {
  return valueA - valueB
}

function compose(...fns) {
  return function composed(arg) {
    return fns.reduceRight((prevResult, fn) => {
      return fn(prevResult)
    }, arg)
  }
}
// Ao vincular argumentos usando bind, você está pré-configurando essas funções com argumentos específicos
// antes mesmo de serem chamadas. No momento em que a função addThenMultiply é executada, os argumentos
// vinculados serão mantidos e serão passados automaticamente para as funções correspondentes (multiply, add e sub).

const addThenMultiply = compose(
  multiply.bind(null, 2),
  add.bind(null, 1),
  sub.bind(null, 1)
)

addThenMultiply(3) // Output: 10
