const buttonIdade = document.getElementById("buttonIdade");

buttonIdade.addEventListener("click", () =>{
    let idade = Number(document.getElementById("inputIdade").value)

    if(idade < 12 && idade > 0){
        alert('Criança')
    }
    else if(idade >= 12 && idade < 18){
        alert('Adolescente')
    }
    else if(idade >= 18 && idade <60){
        alert('Adulto')
    }
    else if(idade <= 0 || idade >= 120){
        alert('Erro! Idade Inválida')
    }
    else{
        alert('Idoso')
    }

    document.getElementById("inputIdade").value = ""
});