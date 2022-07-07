let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log( )

isAtivo = 1
console.log(!true)
console.log(!!true)
console.log(!false)
console.log(!!false)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('OU ||')
console.log(!!('' || null || 0 || '123'))

let nome = ''
console.log(nome || 'DESCONHECIDO')
nome = 'Pamella'
console.log(nome || 'DESCONHECIDO')


