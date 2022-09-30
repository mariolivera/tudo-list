fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
.then((resposta)=>resposta.json())
.then((regioes)=>{
        regioes.map( (cadaRegiao) => {
        document.getElementById('regiao').innerHTML +=`
        <Option ="${cadaRegiao.id}">${cadaRegiao.nome}</Option>
        `;
    });
});

function listarestado() {
    document.getElementById('estado').innerHTML = <option="cadaEstado".value="0">-- selecione --</option>
    let estadoselecionado =estado.value;    
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoselecionado}')
document.getElementById('estado').innerHTML +=
    estado.forEach( (cadaEstado) => {
    .then((resposta)=>resposta.json())
    .then((Estado)=>{
            console.log('estado');
            let Estadostring = document.getElementById('estado').innerHTML
            Estado.map((cadaEstado) => {
                Cidadestring +=
                <Option value ="${cadaEstado.id}">${cadaEstado.nome}</Option>
                ;
            });
            document.getElementById('estado').innerHTML = Estadostring;
});
}

function listarcidade() {
    document.getElementById('cidade').innerHTML = <option value="0">-- selecione --</option>
    let cidadeselecionado =cidade.value;    
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoselecionado}/distrito')
    .then((resposta)=>resposta.json())
    .then((Estado)=>{
            console.log('cidade');
            let cidadestring = document.getElementById('cidade').innerHTML
            cidade.map(cadacidade) => {
                Cidadestring +=
                <Option value ="${cadacidade.id}">${cadacidade.nome}</Option>
                ;
            });
            document.getElementById('cidade').innerHTML = cidadestring;
});
