/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
function expensiveFunction(arg1, arg2, arg3) {
  console.log('Calculating result...')

  return arg1 + arg2 + arg3
}

// utils/memoization
function memoize(fn) {
  const cache = new Map()

  return function memoized(...args) {
    const key = args.join('-')

    if (cache.has(key)) {
      console.log('Returning cached result...')

      return cache.get(key)
    }

    const result = fn(...args)

    cache.set(key, result)

    return result
  }
}

// utils/currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    }

    return function (...moreArgs) {
      return curried(...args, ...moreArgs)
    }
  }
}

const memoizedCurriedFunction = memoize(curry(expensiveFunction))

console.log(memoizedCurriedFunction(1)(2)(3)) // Output: Calculating result... 6
// se ja fez o calculo, a função apenas retorna o valor novamente!!!!!!
console.log(memoizedCurriedFunction(1)(2)(3)) // Output: Returning cached result... 6
