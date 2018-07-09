import sub from './sub'

class Greeter {
  constructor(name) {
    this.name = name
  }
  greet() {
    sub.hello(this.name)
  }
}

const greeter = new Greeter('Takuma')
greeter.greet()
