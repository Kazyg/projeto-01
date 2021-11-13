function salvar(){

const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const data = document.getElementById('data');

voltaBotao()

const tituloV = titulo.value.trim();
const descricaoV = descricao.value.trim();
const dataV = data.value.trim();

    let tarefa = {"titulo":tituloV, "descricao":descricaoV, "data":dataV};

mostrar(tituloV)
}