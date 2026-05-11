const buttonFreq = document.getElementById("buttonFreq")

buttonFreq.addEventListener("click", () =>{
    let nota = document.getElementById("inputNota").value
    let frequencia = document.getElementById("inputFreq").value

    if(nota >= 60 && frequencia >= 75 && nota <= 100 && frequencia <= 100 ){
        alert('Aprovado')
    }
    else if(nota >= 40 && nota < 60 && frequencia >= 75){
        alert('Recuperação')
    }
    else if(nota < 40 && nota > 0 || frequencia < 75 && frequencia > 0){
        alert('Reprovado')
    }
    else if(nota == "" || frequencia == ""){
        alert('Preencha todos os campos!')
    }
    else if(nota < 0 || nota > 100 || frequencia < 0 || frequencia > 100)
        alert('Valores inválidos!')
})