const API_url =('http://localhost:8001')

function atualizarlista() {
    
        fetch(API_url +'/lista/')
        .then(function(resposta){

            return resposta.json();
        })
        .then (function(listas){
            tabela_telefonica.innerHTML ='';
            listas.forEach(function(cadaItem){
                tabela_telefonica.innerHTML +=`
               <tr>
                    <td>${cadaItem.id}</td>
                    <td>${cadaItem.nome}</td>
                    <td>${cadaItem.telefone}</td>
                    <td>${cadaItem.cidade}</td>
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


