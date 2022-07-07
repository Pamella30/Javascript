// funcao sem retorno
function somar(a, b){
    console.log(a + b)
}
somar(25, 9)
somar(21)
somar(1, 2, 6)

//funcao com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(5, 6))
