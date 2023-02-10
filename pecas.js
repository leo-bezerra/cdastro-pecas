//ATIVIDADE: CADASTRO LOJA DE PEÇAS - PFS_UC8 - LÓGICA DE PROGRAMAÇÃO - TURMA 4

let pesoPeca = 101

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, a peça pode ser cadastrada!")
} else {
    console.log("Peso insuficiente, não é possível cadastrar a peça!")
}

let numeroPecas = 10

if(numeroPecas < 10) {
console.log("Ainda há espaço na caixa, a peça pode ser cadastrada.")
} else {
    console.log("Não há espaço disponível na caixa.")
}

let nomePeca = "Di"

console.log("O comprimento no nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possível efetuar o cadastro")
} else {
    console.log("Nome de peça em conformidade, pode ser cadastrada!")
}
