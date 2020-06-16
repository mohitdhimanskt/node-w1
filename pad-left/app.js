const element=require('./padleft')


const numbers = [ "12", "846", "2", "1236" ]

numbers.forEach(num => {
  console.log(element(num, 5, "_"))
})