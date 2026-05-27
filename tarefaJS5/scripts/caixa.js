btnMostrar = document.getElementById("btnMostrar")

produtos = ["Mouse", "Teclado", "Headset", "IEM", "Monitor"]

precos = [15, 27, 22, 30, 66]

btnMostrar.addEventListener("click", (e) =>{
    e.preventDefault();
    let lista = document.getElementById("lista")
    let i = 0
    let soma = 0;
    lista.textContent = ""

    for(i = 0; i < precos.length && produtos.length; i++){
        let li = document.createElement("li")
        let p = document.getElementById("pValor")
        soma = soma + precos[i];

        li.textContent = produtos[i] + " R$ " + precos[i]
        p.textContent = " R$ " + soma
        lista.appendChild(li)
    }
});