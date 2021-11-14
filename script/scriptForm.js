function salvar(){

   

const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const data = document.getElementById('data');



const tituloV = titulo.value.trim();

var x = verificarKey(tituloV) 
if(x == false){
  return;
}

const descricaoV = descricao.value.trim();
const dataV = data.value.trim();
voltaBotao()

    var tarefa = {"titulo":tituloV, "descricao":descricaoV, "data":dataV, "checado": 0};

armazenando(tarefa);
mostrar(tituloV)

}