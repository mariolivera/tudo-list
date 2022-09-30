function adicionar(){
    event.preventDefault();
let = dados ={
    item: input_item.value,
    quantidade: parseInt(input_quantidade.value),
}

    fetch ('http://localhost:8001/lista',{
    method: "POST",
    Headers :{
        'content.value':'aplication/json',
    }
})
    body: JSON.stringfy(dados),
    .then(resposta =>resposta.json())
    .then(resposta=>atualizarlista());
    
}
    form_add.Reset();
