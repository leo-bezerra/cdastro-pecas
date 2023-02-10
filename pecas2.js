//ATIVIDADE: CADASTRO LOJA DE PEÇAS - PFS_UC8 - LÓGICA DE PROGRAMAÇÃO - TURMA 4

function pecas(){

//VERIFICA O PESO DA PEÇA

let pesoPeca = parseFloat(document.getElementById("peso").value)

if(pesoPeca > 100) {
    alert("Peso maior que 100g, a peça pode ser cadastrada!")
} else {
    alert("Peso insuficiente, não é possível cadastrar a peça!")
}

//VERIFICA A QUANTIDADE POR CAIXA

let numeroPecas = parseFloat(document.getElementById("numero").value)

if(numeroPecas < 10) {
    alert("Ainda há espaço na caixa, a peça pode ser cadastrada.")
} else {
    alert("Não há espaço disponível na caixa.")
}

//VERIFICA O TAMANHO DO NOME DA PEÇA

//let nomePeca = parseFloat(document.getElementById("nomedapeca").value)

let nomePeca = document.getElementById("nomedapeca").value;
            alert("Quantidade de letras do nome da peça: " + nomePeca.length);

    //alert("O comprimento no nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    alert("Nome de peça muito curto, não é possível efetuar o cadastro.")
} else {
    alert("Nome de peça em conformidade, pode ser cadastrada!")
}

}