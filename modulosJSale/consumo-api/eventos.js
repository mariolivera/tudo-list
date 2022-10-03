const API_url = 'http://localhost:8002'
function marcarTodos(){
    let todos= document.querySelectorAll('[data-check="acao"]');

    todos.forEach((cadaCheck) => {
        cadaCheck.checked = true;
    });
}


function buscarparaeditar(id){     //aqui é uma busca para o editar

    fetch(API_url+'/compras/'+id)
        .then(res=>res.json())
        .then(dados=> {
            input_editar_id.value = id;
            input_editar_item.value = dados.item;
            input_editar_quantidade.value = dados.quantidade;
        });
}

async function editar(){
    event.preventDefault();
        let dados = {
        item:input_editar_item.value,
        quantidade:input_editar_quantidade.value,

    };
    await fetch(API_url+'/compras/'+input_editar_id.value,{
        method:'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'content-type': 'application/json',
        }
    })
    
    .then(res=>res.json())
    .then(()=>atualizarlista());

   let x = document.querySelector('[data-bs-dismiss="offcanvas"]');  //o queryselector vai buscar esse codigo no HTML e fazer ele ficar disponivel
   x.dispatchEvent(new Event('click'));                            // o dispatchevent .dispatchEvent(new Event('click')); aqui faz ele realizar uma ação no caso o click.
}

function inserir (){
    event.preventDefault();  // para a pagina não ser recarregado
    let dados ={
        item: input_item.value,
        quantidade: parseInt(input_quantidade.value),
    };
    
    fetch(API_url+'/compras', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'content-Type': 'application/json'      // colocasse as '' para ele reconhecer
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => atualizarlista());

        form_add.reset();
}


 async function excluir(id){
    let resposta= confirm('voce quer excluir?')  // o confirme irar perguntar se o cliente vai querer 

        if (resposta !== true){
            return;
        }

      await  fetch(API_url+'/compras/'+id,{    // await ele faz com que esse comando faz o fetch ele esperar e colocar o / no final para chamar o item.
        method: 'DELETE'
        
    });
    atualizarlista();
}

// function atualizarQuantidade(){
//     document.getElementById('numeros').innerHTML =tabela_compras.legth;
// }

function atualizarlista(){

    // let resposta = await fetch ('http://localhost:8000/compras') //isso só se coloca o fetch se for um GET
    // let resposta2 = await resposta.json()
    fetch (API_url+'/compras')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(lista){
            tabela_compras.innerHTML ='';
            lista.forEach(function (cadaItem){
               tabela_compras.innerHTML +=`
               <tr>
                    <td><input data-check="acao" type="checkbox" ></td>
                    <td>${cadaItem.id}</td>
                    <td>${cadaItem.item}</td>
                    <td>${cadaItem.quantidade}</td>
                    <td>
                        <button onclick="buscarparaeditar(${cadaItem.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-warning btn-sm">
                            Editar
                        </button>
                        <button onclick="excluir(${cadaItem.id})" class="btn btn-danger">
                            excluir
                        </button>
                       
                    </td>    
                </tr>    
               `; 
            });
        })
}

atualizarlista();