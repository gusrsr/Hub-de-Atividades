const btnEstoque = document.getElementById("btnProdutos")
const btnProdutos = document.getElementById("btnMostrarPr")
const btnApagar = document.getElementById("btnApagarPr")
let item = ""
produtos = []
precos = []

btnEstoque.addEventListener("click", (e) => {
    let inputProduto = document.getElementById("inputProduto").value.trim();
    let inputPreco = document.getElementById("inputPreco").value.trim();
    let msg = document.getElementById("msgP")

    if(inputProduto == "" || inputPreco == "" || inputPreco < 0){
        msg.textContent = "Erro! Preencha todos os campos corretamente!"
        setTimeout ( () =>{
            msg.textContent = ""
        }, 2000)
        return
    }
    else{
        produtos.push(inputProduto)
        precos.push(inputPreco)
        msg.textContent = "Produto cadastrado com sucesso!"
        setTimeout( () =>{
            msg.textContent = ""
        }, 2000)
        return
    }
});

btnProdutos.addEventListener("click", (e) =>{
    e.preventDefault();
    let lista = document.getElementById("ulProdutos")
    lista.textContent = ""

    for(let i = 0; i < produtos.length; i++){
        item = document.createElement("li")
        item.textContent = produtos[i] + " R$" + precos[i]
        lista.appendChild(item)
    }
});

btnApagar.addEventListener("click", (e) =>{
    e.preventDefault();
    item.remove();
})