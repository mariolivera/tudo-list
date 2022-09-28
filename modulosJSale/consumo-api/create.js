function criar(){
    event.preventDefault()
    let produto = {
        item: document.getElementById("item").value,
        quantidade: document.getElementById("quantidade").value
    }
    console.log(produto);
}
