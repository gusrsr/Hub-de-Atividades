const buttonProdutos = document.getElementById("buttonPr")

let quantidade = 0
let produtos = []
let precos = []


/*Add produtos */

buttonProdutos.addEventListener("click", (e) =>{
    e.preventDefault();
    let nome = document.getElementById("inputNomePr").value.trim();
    let preco = document.getElementById("inputPrecoPr").value.trim();
    let msg = document.getElementById("msgErro")

    if(nome == "" || preco == "" || preco < 0 ){
        msg.textContent = 'Erro! Preencha os campos corretamente.'
        setTimeout( () =>{
            msg.textContent = "";
        }, 2000);
        return
    }
    else{
        produtos.push(nome);
        precos.push(preco);
        msg.textContent = 'Produto adicionado!'
        setTimeout( () =>{
            msg.textContent = "";
        }, 2000);
        quantidade += 1
        document.getElementById("quantidade").textContent = quantidade
        console.log(produtos, precos)
        mostrar();
        return
    };

    document.getElementById("inputNomePr").value = ""
    document.getElementById("inputPrecoPr").value = ""
});

/* Mostrar produtos*/

function mostrar()
{
    let lenPr = produtos
    let lenPc = precos
    let lista = document.getElementById("uLista")
    lista.textContent = "";

    for (let i = 0; i < lenPr.length; i ++ ){
        let item = document.createElement("li");
        item.textContent = produtos[i] + " R$" + precos[i];
        lista.appendChild(item)
    }
}