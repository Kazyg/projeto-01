

function botaoAdd(){

    document.getElementById("botao").innerHTML =('<button id="adicionar" value="Adicionar Tarefa" onclick="salvar()">Adicionar Tarefa</button>')
    document.getElementById("formularioLista").innerHTML =('<form id="formList"><br> Titulo: <input type="text" id="titulo"><br><small>error mssg</small><br> descrição: <input type="text" id="descricao"><br><br> Data para finalizar: <input type="date" id="data"></form>')
    
}


function voltaBotao(){
    document.getElementById("botao").innerHTML =('<button id="adicionar" value="Adicionar Tarefa" onclick="botaoAdd()">Adicionar Tarefa</button>')
    document.getElementById("formularioLista").innerHTML =('')

}

function mostrar(tituloV){

    var lista = document.getElementById("lista");
    var novoItem = document.createElement('li');
    novoItem.innerHTML = tituloV;
    lista.appendChild(novoItem);
    

}

function armazenando(tarefa, tituloV){


    localStorage.setItem(JSON.stringify(tituloV), JSON.stringify(tarefa));

}



function verificarKey(verif){
    

    if (localStorage.getItem(JSON.stringify(verif)) === null) {
        
        

      }else{
        const titulo = document.getElementById('titulo');
        seterror(titulo, "esse titulo ja esta sendo usado")
        
        return x = false;
        

      }
}

function seterror(titulo, mensagem){

    const formparts = titulo.parentElement;
    formparts.id = 'formListErro';
    const erroTexto = formparts.querySelector('small')
    erroTexto.innerText = mensagem;

}