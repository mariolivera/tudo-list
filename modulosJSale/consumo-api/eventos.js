function excluir(id){
        fetch('http://localhost:8000/compras/'+id,{
        method: 'DELETE'
        
    });
    atualizarlista();
}


function atualizarlista(){
    fetch('http://localhost:8000/compras') //isso só se coloca o fetch se for um GET
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(lista){
            tabela_compras.innerHTML ='';
            lista.forEach(function (cadaItem){
               tabela_compras.innerHTML +=`
               <tr>
                    <td>${cadaItem.id}</td>
                    <td>${cadaItem.item}</td>
                    <td>${cadaItem.quantidade}</td>
                    <td>
                        <button onclick="excluir(${cadaItem.id})" class="btn btn-danger">excluir</button>
                    </td>    
                </tr>    
               `; 
            });
        })
}

atualizarlista();

