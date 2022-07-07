const valores = [7.7, 2, 9.21, 3]
console.log(valores[0])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({id: 5}, false, null, 'texto')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(valores[0])

console.log(typeof valores)
