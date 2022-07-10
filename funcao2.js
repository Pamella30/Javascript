// armazenamento de funcao em uma variavel
const soma = function (a, b) {
    console.log(a + b)
}

soma(5, 9)

// armazenamento de funcao arrow em uma variavel
const somar =(a, b) => {
    return a + b
} 

console.log(somar(8, 80))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(9, 2))


