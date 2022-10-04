function acionarBotaoExcluir(){

    let todosCheck = document.querySelectorAll('[data-check="acao"]');

    let quantidade = 0;

        todosCheck.forEach((cadaCheck)=>{

            cadaCheck.checked===true && quantidade++;
            
        })
            //btn_remove_all.classLista.add('d-none');
            if( quantidade>0){
                btn_remove_all.classList.remove("d-none")
            }else{
                btn_remove_all.classList.add("d-none");
            }
}
function excluirselecionados(){
    if(false===confirm('tem certeza')){
        return;
    }
    let todosCheck = document.querySelectorAll('[data-check="acao"]');
    
    todosCheck.forEach((cadaCheck)=>{
         if (cadaCheck.checked===true){
           fetch(API_url+'/compras/' + cadaCheck.value,{
                method:'DELETE'
            })
        }
    })
}