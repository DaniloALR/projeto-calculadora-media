const form = document.getElementById('form')
const imgAprovado = "<img src='./images/aprovado.png' alt='emoji festejando' />"
const imgReprovado = "<img src='./images/reprovado.png' alt='emoji decepcionado' />"
const spanAprovado = "<span class='resultado aprovado'> Aprovado </span>"
const spanRerovado = "<span class='resultado reprovado'> Reprovado </span>"

const notaMinima = parseInt(prompt("Digite a nota mínima: "))

let linhas = ''

let atividades = [];
let notas = [];


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const nomeAtividade = document.getElementById('nomeAtividade')
    const notaAtividade = document.getElementById('notaAtividade')

    if(atividades.includes(nomeAtividade.value)){
        alert(`A atividade ${nomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(nomeAtividade.value)
        notas.push(parseFloat(notaAtividade.value))

        let linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'

        linhas += linha
    }

    nomeAtividade.value = ''
    notaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanRerovado
}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}
