// Tecnica para criar uma nova função passando parcialmente seus argumentos
// x(1)(2)(4) equivalente a:
// x(1,2,4)

function add(a, b, c) {
  return a + b + c
}

function curry(fn) {
  return function curried(...args) {
    // vou receber todos args da funcao
    if (args.length >= fn.length) {
      // vou verificar se ta preenchido e fazer spred
      return fn(...args)
    } else {
      // se não vou passar os args vazios e os novos valores
      return function (...moreArgs) {
        return curried(...args, ...moreArgs)
      }
    }
  }
}

const curriedAdd = curry(add)

console.log(curriedAdd(1)(2)(3)) // Output: 6
