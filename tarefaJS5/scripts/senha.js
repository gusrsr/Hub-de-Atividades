btnSenha = document.getElementById("btnSenha")

btnSenha.addEventListener("click", () =>{
    let pResultado = document.getElementById("pSenha")
    let pTenta = document.getElementById("pTentativas")
    let senha = "";
    let tenta = 0;

    while (senha !== "wukongL0L"){
        senha = prompt("Digite a senha correta!") 
        tenta = tenta + 1
        pTenta.textContent = tenta
    }
        pResultado.textContent = "Acesso permitido!"
        setTimeout(() =>{
            pResultado.textContent = ""
        },2000)
});



/*
criar if para verificar se esta vazio e contar como tentativa
ao errar a senha contar +1 para tentativa
*/

/*
let pS = document.getElementById("pSenha")
    let pT = document.getElementById("pTentativas")
    !== "wukongL0L"*/
