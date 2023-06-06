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

const addThenMultiply = compose(
  multiply.bind(null, 2),
  add.bind(null, 1),
  sub.bind(null, 1)
)

addThenMultiply(3) // Output: 10
