var arrayTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
mostrarInicio()


// functions do botao add
function botaoAdd(){

    document.getElementById("botao").innerHTML =('<button id="adicionar" value="Adicionar Tarefa" onclick="salvar()">Adicionar Tarefa</button>')
    document.getElementById("formularioLista").innerHTML =('<form id="formList"> Titulo: <input type="text" id="titulo"><small>error mssg</small> descrição: <input type="text" id="descricao"><br> Data para finalizar: <input type="date" id="data"><input id="submitVoltar" type="submit" value="fechar" onclick= "voltaBotao()"</form>')
    
}


function voltaBotao(){
    document.getElementById("botao").innerHTML =('<button id="adicionar" value="Adicionar Tarefa" onclick="botaoAdd()">Nova Tarefa +</button>')
    document.getElementById("formularioLista").innerHTML =('')

}

//function de mostrar a lista

function mostrarInicio(){

    for(i = 0; i < arrayTarefas.length; i++){

    let itens = arrayTarefas[i];
    let lista = document.getElementById("lista");

    let ulMenor = document.createElement('ul');
    ulMenor.setAttribute("id", "ul_"+i);

    let quebra = document.createElement('br');

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
    lista.appendChild(ulMenor);

    let listaMenor = document.getElementById("ul_"+i);
    
    listaMenor.appendChild(checkbox);
    
    listaMenor.appendChild(novoItem);
    listaMenor.appendChild(botao);
    listaMenor.appendChild(quebra);
    
    
    
    
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

   
    let ulMenor = document.createElement('ul');
    ulMenor.setAttribute("id", "ul_"+i);

    let quebra = document.createElement('br');

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

    lista.appendChild(ulMenor);

    let listaMenor = document.getElementById('ul_'+i);
    
    listaMenor.appendChild(checkbox);
  
    listaMenor.appendChild(novoItem);
    listaMenor.appendChild(botao);
    listaMenor.appendChild(quebra);
    
    
    

}


//function de abrir a tarefa

function abrirTarefa(idClicado){

    const idClicadoMM = idClicado.split("_").pop();
    const tarefaClicada = arrayTarefas[idClicadoMM];
    const tituloClicado = tarefaClicada.titulo;
    const descricaoClicado = tarefaClicada.descricao;
    const dataClicado = tarefaClicada.data;
    let quebra = document.createElement('br');
    let quebra1 = document.createElement('br');

    document.getElementById("paginaToda").innerHTML =('<div class="divs"><h1>MyList</h1><h2>sua lista de tarefas</h2></div><div id = "divs"><ul id="lista"></ul><br><button id="voltar" value="voltar" onclick="voltarParaLista()">Voltar</button></div>');
    let lista = document.getElementById("lista");

    let novoItem = document.createElement('li');
    novoItem.innerHTML = "Titulo:<br>"+tituloClicado;
    lista.appendChild(novoItem);
    lista.appendChild(quebra1);

    if(descricaoClicado !== ""){
        let novoItem1 = document.createElement('li');
        novoItem1.innerHTML = "Descrição:<br>"+descricaoClicado;
        lista.appendChild(novoItem1);
        lista.appendChild(quebra);
    }
    if(dataClicado !== ""){
        let novoItem2 = document.createElement('li');
        novoItem2.innerHTML = "Data para Entrega:<br>"+dataClicado;
        lista.appendChild(novoItem2);
    }

}

function voltarParaLista(){

    document.getElementById("paginaToda").innerHTML = ('<div class="divs"><h1>MyList</h1><h2>sua lista de tarefas</h2></div><div id="botao"><button id="adicionar" value="Adicionar Tarefa" onclick="botaoAdd()">Nova Tarefa +</button></div><div id="formularioLista"></div><div id="listaTarefas"><ul id="lista"></ul></div>');
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
    const tarefaClicada = arrayTarefas[idExcluidoMM];
    const tituloClicado = tarefaClicada.titulo;
    let checado = document.getElementById("ck_"+idExcluidoMM);

    if(checado.checked){

        var confirmado = window.confirm("Deseja excluir a tarefa " + tituloClicado + "?");

    }else{

        var confirmado = window.confirm("                             A tarefa ainda não foi concluida\n                           Deseja excluir a tarefa " + tituloClicado + "?");

    }
    if(confirmado == true){
        arrayTarefas.splice(idExcluidoMM, 1);
        localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
        document.getElementById("lista").innerHTML = ('');
        mostrarInicio()
    }else{

        return;
    }




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