const buttonLogin = document.getElementById("buttonLogin");

buttonLogin.addEventListener("click", (e) =>{
    e.preventDefault();
    let usuario = document.getElementById("inputUser").value
    let senha = document.getElementById("inputSenha").value

    if(usuario == "admin" && senha == "1234"){
        alert('Login realizado com sucesso!')
    }
    else if(usuario == "professor" && senha == "senac"){
        alert('Bem-vindo, professor')
    }
    else if(usuario == "" || senha == ""){
        alert('Preencha todos os campos')
    }
    else{
        alert('Usuário ou senha incorretos')
    }
});