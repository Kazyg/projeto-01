

function botaoAdd(){

    document.getElementById("botao").innerHTML =('<button id="salvar" value="Adicionar Tarefa" onclick="salvar()">Adicionar Tarefa</button>')
    document.getElementById("formularioLista").innerHTML =('<form> Titulo: <input type="text" id="titulo"><br> descrição: <input type="text" id="descricao"><br> Data para finalizar: <input type="date" id="data"></form>')
    
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