function expensiveFunction(arg: number) {
  return arg * 2
}

// esse conceito é usado no React com o hook useMemo

function memoizeFunction(fn: (value: number) => number) {
  const cache = new Map()

  return function (arg: number) {
    if (cache.has(arg)) {
      return cache.get(arg)
    }
    const result = fn(arg)

    cache.set(arg, result)

    return result
  }
}

const memoizedExpensiveFunction = memoizeFunction(expensiveFunction);

console.log(memoizedExpensiveFunction(2)); // Output: Calculating result... 4
console.log(memoizedExpensiveFunction(2)); // Output: Returning cached result... 4
