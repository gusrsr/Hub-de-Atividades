const buttonPag = document.getElementById("buttonPagamento")

buttonPag.addEventListener("click", (e) =>{
    e.preventDefault();
    let cupom = document.getElementById("inputCupom").value
    let valorIn = Number(document.getElementById("inputValorCompra").value);
    let vip = document.getElementById("inputRadVIP1").checked;
    

    if(valorIn >= 500 && vip){
        desconto = valorIn * 0.20;
        valorFinal = valorIn - desconto ;
        alert("R$" + valorFinal);
    }
    else if(valorIn >= 300 || cupom == "boasvindas"){
        desconto = valorIn * 0.10;
        valorFinal = valorIn - desconto;
        alert("R$" + valorFinal);
    }
    else if(valorIn < 300 && valorIn > 0){
        valorFinal = valorIn
        alert("R$" + valorFinal)
    }
    else if(valorIn <= 0)
        alert('Erro! Insira números válidos')
});