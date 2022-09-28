fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
.then((resposta)=>resposta.json())
.then((regioes)=>{
        regioes.forEach( (cadaRegiao) => {
        document.getElementById('regiao').innerHTML +=`
        <Option>${cadaRegiao.nome}</Option>
        `;
    });
});

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then((resposta)=>resposta.json())
.then((Estado)=>{
        Estado.forEach( (cadaEstado) => {
        document.getElementById('estado').innerHTML +=`
        <Option>${cadaEstado.nome}</Option>
        `;
    });
});

fetch('')
.then((resposta)=>resposta.json())
.then((Cidade)=>{
        Cidade.forEach( (cadaCidade) => {
        document.getElementById('cidade').innerHTML +=`
        <Option>${cadaCidade.nome}</Option>
        `;
    });
});

