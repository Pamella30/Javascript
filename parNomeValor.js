const saudacao = 'Oi'

function exec(){
    const saudacao = 'Hello'
    return saudacao
} 

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pamella',
    idade: 32,
    peso: 67,
    endereco: {
        logradouro: 'Bolton street',
        numero: 61
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

