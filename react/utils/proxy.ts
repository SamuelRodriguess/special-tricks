export const myProxy = {
  name0: 'myproxy0',
  name1: 'myproxy1',
}

export const handle = {
  get(_target, prop, _receiver) {
    return myProxy[prop]
  },

  set(_target, prop, value, _receiver) {
    return (myProxy[prop] = value)
  },
}

export const proxy = new Proxy(myProxy, handle)

proxy.bar = 'quux' // Output: Setting bar to quux...
