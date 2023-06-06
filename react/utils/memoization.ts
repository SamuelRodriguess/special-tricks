function expensiveFunction(arg: number) {
  return arg * 2
}

// esse conceito é usado no React com o hook useMemo

// é importante destacar que o useMemo e o memoize têm finalidades diferentes.
// O useMemo é específico para componentes React e é útil quando você deseja memoizar
// valores dentro de um componente de função. O memoize, por outro lado, é uma função genérica
// que pode ser usada para  memoizar qualquer função em JavaScript, independentemente do contexto do React.

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
