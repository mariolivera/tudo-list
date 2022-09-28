function buscarendereco(){
    if (cep.value.length !== 8){    //
        return;
    }  
    fetch(`http://viacep.com.br/ws/${cep.value}/json`)  //aqui é realizada a busca. o {} é onde vai o cep digitado na input.
        .then( (resposta)=>resposta.json() )   // quando a resposta chega a gente extrai o json dela.
        .then((endereco)=>{
            if(endereco.erro) {
                alert('CEP Invalido');
                return;
            }
            logradouro.value = endereco.logradouro;
            bairro.value = endereco.bairro;
            uf.value = endereco.uf;
            localidade.value = endereco.localidade;
            
        });  // aqui a gente usa o json dela extraido da resposta.
}