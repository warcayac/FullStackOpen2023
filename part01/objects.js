const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  },
}

arto.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed

arto.greet()       // "hello, my name is Arto Hellas" gets printed

console.log('*******************')
const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"

console.log('*******************')
setTimeout(arto.greet, 1000)  // async call
setTimeout(arto.greet.bind(arto), 1000) // async call

console.log('*******************')
const referenceToGreet2 = arto.greet.bind(arto)
referenceToGreet2() // prints "hello, my name is Arto Hellas"
