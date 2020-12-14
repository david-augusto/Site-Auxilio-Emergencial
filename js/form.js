var botaoAdicionar = document.querySelector("#adicionar-pessoa");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var pessoa = obtempessoaFormulario(form);
    var pessoaTr = montaTr(pessoa);
    var tabela = document.querySelector("#tabela-pessoa");
    tabela.appendChild(pessoaTr);
    form.reset();
});

function obtempessoaFormulario(form){
    var pessoa = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        mae: form.mae.value,
        renda: form.renda.value,
        situacao: calculasituacao(form.renda.value)}
    
    return pessoa;
}

function montaTr (pessoa){
    var pessoaTr =document.createElement("tr");
    pessoaTr.classList.add("pessoa");
    pessoaTr.appendChild(montaTd(pessoa.nome,"info-nome"));
    pessoaTr.appendChild(montaTd(pessoa.cpf,"info-cpf"));
    pessoaTr.appendChild(montaTd(pessoa.mae,"info-mae"));
    pessoaTr.appendChild(montaTd(pessoa.renda,"info-renda"));
    pessoaTr.appendChild(montaTd(pessoa.situacao,"info-situacao"));
    
    return pessoaTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    
    return td;
}



