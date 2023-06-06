class User {
  constructor(name: string) {
    this.name = name
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`)
  }
}

const person = new Person('John')

Reflect.has(person, 'name')

Reflect.get(person, 'name') // valor

Reflect.set(person, 'name', 'Jane') // logo vai salvar Jane

Reflect.defineProperty(person, 'age', { value: 25 })
