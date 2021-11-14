var arrayTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
mostrarInicio()


// functions do botao add
function botaoAdd(){

    document.getElementById("botao").innerHTML =('<button id="adicionar" value="Adicionar Tarefa" onclick="salvar()">Adicionar Tarefa</button>')
    document.getElementById("formularioLista").innerHTML =('<form id="formList"><br> Titulo: <input type="text" id="titulo"><br><small>error mssg</small><br> descrição: <input type="text" id="descricao"><br><br> Data para finalizar: <input type="date" id="data"></form>')
    
}


function voltaBotao(){
    document.getElementById("botao").innerHTML =('<button id="adicionar" value="Adicionar Tarefa" onclick="botaoAdd()">Adicionar Tarefa</button>')
    document.getElementById("formularioLista").innerHTML =('')

}

//function de mostrar a lista

function mostrarInicio(){

    for(i = 0; i < arrayTarefas.length; i++){

    let itens = arrayTarefas[i];
    let lista = document.getElementById("lista");

    let novoItem = document.createElement('li');
    novoItem.setAttribute("id", "li_" + i);
    novoItem.setAttribute("onclick", "abrirTarefa(id)");

    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "ck_" + i);
    checkbox.setAttribute("onclick", "tarefaFeita(id)");

    let botao = document.createElement('input');
    botao.setAttribute("type", "button");
    botao.setAttribute("id", "bt_" + i);
    botao.setAttribute("onclick", "excluir(id)");
    botao.setAttribute("value", "X");
    




    novoItem.innerHTML = itens.titulo;
    
    lista.appendChild(novoItem);
    lista.appendChild(checkbox);
    lista.appendChild(botao);
    
    
    if(itens.checado == 1){

        let ok = 1;
        riscarTarefa(i, ok);
        checkbox.checked = true;

    }

    }

}

function mostrar(tituloV){

    let i = arrayTarefas.length - 1;
    let lista = document.getElementById("lista");
    let novoItem = document.createElement('li');
    novoItem.setAttribute("id", "li_" + i);
    novoItem.setAttribute("onclick", "abrirTarefa(id)");

    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "ck_" + i);
    checkbox.setAttribute("onclick", "tarefaFeita(id)");

    let botao = document.createElement('input');
    botao.setAttribute("type", "button");
    botao.setAttribute("id", "bt_" + i);
    botao.setAttribute("onclick", "excluir(id)");
    botao.setAttribute("value", "X");

    novoItem.innerHTML = tituloV;
    lista.appendChild(novoItem);
    lista.appendChild(checkbox);
    lista.appendChild(botao);
    

}


//function de abrir a tarefa

function abrirTarefa(idClicado){

    const idClicadoMM = idClicado.split("_").pop();
    const tarefaClicada = arrayTarefas[idClicadoMM];
    const tituloClicado = tarefaClicada.titulo;
    const descricaoClicado = tarefaClicada.descricao;
    const dataClicado = tarefaClicada.data;

    document.getElementById("paginaToda").innerHTML =('<div><ul id="lista"></ul><br><button id="voltar" value="voltar" onclick="voltarParaLista()">Voltar</button></div>');
    let lista = document.getElementById("lista");

    let novoItem = document.createElement('li');
    novoItem.innerHTML = tituloClicado;
    lista.appendChild(novoItem);

    let novoItem1 = document.createElement('li');
    novoItem1.innerHTML = descricaoClicado;
    lista.appendChild(novoItem1);

    let novoItem2 = document.createElement('li');
    novoItem2.innerHTML = dataClicado;
    lista.appendChild(novoItem2);

}

function voltarParaLista(){

    document.getElementById("paginaToda").innerHTML = ('<div id="botao"><button id="adicionar" value="Adicionar Tarefa" onclick="botaoAdd()">Nova Tarefa +</button></div><div id="formularioLista"></div><div id="listaTarefas"><ul id="lista"></ul></div>');
    mostrarInicio();

}

//verificar de foi feita

function tarefaFeita(idCheckbox){

    let checado = document.getElementById(idCheckbox);

    const idCheckboxMM = idCheckbox.split("_").pop();

    if(checado.checked){
        var ok = 1;     
    }else{
        var ok = 0;
    }

    riscarTarefa(idCheckboxMM, ok)

}

function riscarTarefa(x, ok){

    if(ok == 1){

         document.getElementById("li_"+x).innerHTML =('<del>'+document.getElementById("li_"+x).innerHTML+'</del>')
         let iten = arrayTarefas[x];
        var tarefa = {"titulo":iten.titulo, "descricao":iten.descricao, "data":iten.data, "checado": 1};
    
    }else if(ok == 0){

        let iten = arrayTarefas[x];
         document.getElementById("li_"+x).innerHTML =(iten.titulo) 
        var tarefa = {"titulo":iten.titulo, "descricao":iten.descricao, "data":iten.data, "checado": 0};
        
    }
    editando(tarefa, x);
    
}

//editando arraytarefas

function editando(tarefa, x){

    arrayTarefas[x]= tarefa;
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));

}

//excluindo tarefas
function excluir(idExcluido){

    const idExcluidoMM = idExcluido.split("_").pop();
    arrayTarefas.splice(idExcluidoMM, 1);
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
    document.getElementById("lista").innerHTML = ('');
    mostrarInicio()




}

// function armazenar localstorage

function armazenando(tarefa){

    arrayTarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));

}

// functions de verificar valores

function verificarKey(verif){
    

    if (verif !== "") {
        
        

      }else{
        const titulo = document.getElementById('titulo');
        seterror(titulo, "esse campo é obrigatorio")
        
        return x = false;
        

      }
}

function seterror(titulo, mensagem){

    const formparts = titulo.parentElement;
    formparts.id = 'formListErro';
    const erroTexto = formparts.querySelector('small')
    erroTexto.innerText = mensagem;

}