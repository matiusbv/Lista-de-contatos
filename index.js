const form = document.getElementById("contato");
const nome = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();

})

function adicionarLinha() {
    const inputNome = document.getElementById("nome");
    const inputTelefone = document.getElementById("telefone")

    if(nome.includes(inputNome.value)){
        alert(`Nome ${inputNome.value} já foi incluído!`)
    }else {
        nome.push(inputNome.value)
        telefone.push(inputTelefone.value)

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNome.value=''
    inputTelefone.value=''
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

