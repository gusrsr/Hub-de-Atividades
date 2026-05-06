const buttonF1 = document.getElementById("buttonF1")
const buttonF2 = document.getElementById("buttonF2")
const buttonF3 = document.getElementById("buttonF3")
const buttonF4 = document.getElementById("buttonF4")
const buttonF5 = document.getElementById("buttonF5")
const buttonF6 = document.getElementById("buttonF6")
const buttonF7 = document.getElementById("buttonF7")
const buttonM1 = document.getElementById("buttonM1")
const buttonM2 = document.getElementById("buttonM2")
const buttonM3 = document.getElementById("buttonM3")
const buttonM4 = document.getElementById("buttonM4")
const buttonM5 = document.getElementById("buttonM5")
const buttonM6 = document.getElementById("buttonM6")
const buttonM7 = document.getElementById("buttonM7")
const buttonD1 = document.getElementById("buttonD1")
const buttonD2 = document.getElementById("buttonD2")
const buttonD3 = document.getElementById("buttonD3")
const buttonD4 = document.getElementById("buttonD4")
const buttonD5 = document.getElementById("buttonD5")
const buttonD6 = document.getElementById("buttonD6")
const buttonD7 = document.getElementById("buttonD7")

buttonF1.addEventListener("click", () =>{
    const num = document.getElementById("inputF1").value
    if (num == 10){
        alert('Correto!')
    }
    else{
        alert('Incorreto!')
    }
});

buttonF2.addEventListener("click", () =>{
    const nome = document.getElementById("inputF2").value

    if (nome == ("Gustavo Rodrigo")){
        alert('Boa! Você acertou!')
    }
    else{
        alert('Tenta de novo!')
    }
});

buttonF3.addEventListener("click", () =>{
    const texto = document.getElementById("inputF3").value

    if (texto == "ok"){
        alert('Tá ok!')
    }
    else{
        alert('Incorreto!')
    }
});

buttonF4.addEventListener("click", () =>{
    const num = document.getElementById("inputF4").value

    if (num == 5){
        alert('Você digitou o número correto!')
    }
    else{
        alert('Você digitou o número incorreto!')
    }
});

buttonF5.addEventListener("click", (e) =>{
    e.preventDefault();
    const texto = document.getElementById("inputF5").value
    
    if(texto == "admin"){
        pF5.textContent = "Correto!"
    }
    else{
        pF5.textContent = "Nome de login rejeitado!"
    }

    document.getElementById("inputF5").value = ""
});

buttonF6.addEventListener("click", (e) =>{
    e.preventDefault();
    const texto = document.getElementById("inputF6").value
    
    if(texto == "teste"){
        pF6.textContent = "Testado!"
    }
    else{
        pF6.textContent = "Teste rejeitado!"
    }

    document.getElementById("inputF6").value = ""
});

buttonF7.addEventListener("click", (e)=>{
    e.preventDefault();
    const texto = document.getElementById("inputF7").value

    if(texto == "Azul" || texto == "azul"){
        pF7.style.color = "white"
        pF7.style.background = "blue"
    }
    else{
        pF7.textContent = "Eu sou Azul, cara"
        pF7.style.color = "black"
        pF7.style.background = "red"
    }

    document.getElementById("inputF7").value = ""
});

buttonM1.addEventListener("click", () =>{
    let num = Number(document.getElementById("inputM1").value)

    if(num > 10){
        alert('É um número maior que 10!')
    }
    else if(num == 10){
        alert('É o número 10!')
    }
    else{
        alert('É um numero menor que 10!')
    }
});

buttonM2.addEventListener("click", () =>{
    let num = Number(document.getElementById("inputM2").value)

    if(num < 50){
        alert('É um número menor que 50!')
    }
    else if(num == 50){
        alert('É o número 50!')
    }
    else{
        alert('É um número maior que 50!')
    }
})

buttonM3.addEventListener("click", (e) =>{
    e.preventDefault();
    let texto = document.getElementById("inputM3").value

    if(texto == "senha"){
        pM3.textContent = "Senha Aprovada!"
    }
    else{
        pM3.textContent = "Login ou Senha Incorreta!"
    }
});

buttonM4.addEventListener("click", (e) =>{
    e.preventDefault();
    let cor = document.getElementById("inputM4").value

    if(cor == "escuro"){
        document.body.style.backgroundColor = "black"
    }
    else if(cor == "reset"){
        document.body.style.backgroundColor = "white"
    }
    else{
        alert('Tente algo mais escuro!')
    }
    document.getElementById("inputM4").value = ""
});

buttonM5.addEventListener("click", (e) =>{
    e.preventDefault();
    let texto = document.getElementById("inputM5").value

    if(texto == "segredo"){
        pM5.textContent = "secret"
        pM5.style.backgroundColor = "orange"
        pM5.style.color = "white"
        
    }
    else{
        pM5.style.backgroundColor = "blue"
        pM5.style.color = "red"
    }

    document.getElementById("inputM5").value = ""
});

buttonM6.addEventListener("click", (e) =>{
    e.preventDefault();
    let texto = document.getElementById("inputM6").value

    if(texto == "ok"){
        pM5.style.visibility = "hidden"
        buttonM2.style.backgroundColor = "green"
        inputM3.style.visibility = "hidden"
        inputM4.style.visibility = "hidden"
        lM6.style.fontSize = "50px"
    }
    else{
        alert('Erro')
    }

    document.getElementById("inputM6").value = ""
});

buttonM7.addEventListener("click", (e) =>{
    e.preventDefault();
    let num = Number(document.getElementById("inputM7").value)

    if(num > 20){
        pM7.textContent = "Tamo crescendo Tamo crescendo"
        pM7.style.fontSize = "60px"
        pM7.style.backgroundColor = "pink"
    }
    else if(num == 20){
        pM7.textContent = "Caramba! Você gosta de digitar os números exatos hein!"
        pM7.style.fontSize = "100px"
        pM7.style.backgroundColor = "yellow"
        pM7.style.color = "green"
    }
    else if(num < 20){
        pM7.textContent = "Menor que 20?"
        pM7.style.fontSize = "12px"
    }
});

buttonD1.addEventListener("click", (e) =>{
    e.preventDefault();
    let texto = document.getElementById("inputD1").value

    if(texto == "admin"){
        alert('Bem vindo Administrador')
    }
    else{
        alert('Usuário Não encontrado')
    }

    document.getElementById("inputD1").value = ""
});

buttonD2.addEventListener("click", (e) =>{
    e.preventDefault();
    let eleme = document.getElementById("inputD2").value

    if(eleme = String){
        pD2.textContent = "Opa meu chapa!"
        pD2.style.backgroundColor = "purple"
        pD2.style.color = "brown"
        pD2.style.fontSize = "45px"
    }
    else{
        alert('Erro')
    }

    document.getElementById("inputD2").value = ""
});

buttonD3.addEventListener("click", (e) =>{
    e.preventDefault();
    let eleme = Number(document.getElementById("inputD3").value)

    if(eleme != 8 ){
        pD3.textContent = "OPA"
        buttonD2.style.visibility = "hidden"
        buttonF1.style.backgroundColor = "red"
    }
    else{
        pD3.textContent = "XISPA SO"
        buttonD2.style.fontSize = "150px"
        buttonF1.style.backgroundColor = "green"
    }

    document.getElementById("inputD3").value = ""
});

buttonD4.addEventListener("click", (e) =>{
    e.preventDefault();
    let num = Number(document.getElementById("inputD4").value)

    if(num > 100){
        document.body.style.backgroundColor = "gray"
    }
    else{
        inputD4.style.visibility = "hidden"
    }

    document.getElementById("inputD4").value = ""
});

buttonD5.addEventListener("click", (e) =>{
    e.preventDefault();
    let copy = document.getElementById("inputD5").value

    if(copy == "copiar"){
        pD5.textContent = copy
    }
    else{
        pD5.textContent = "Nada copiado!"
    }

    document.getElementById("inputD5").value = ""
})

buttonD6.addEventListener("click", (e) =>{
    e.preventDefault();
    let num = Number(document.getElementById("inputD6").value)

    if(num <= 5){
        inputD5.value = "ALTEROU AQUI EM NO <5"
        inputD4.value = "AQUI TAMBEM EM NO <5"
        document.getElementById("inputD6").value = ""
        document.getElementById("inputD3").value = ""
        document.getElementById("inputD2").value = ""
    }
    else if(num >= 5){
        inputD3.value = "BROTA NO >5"
        inputD2.value = "UAUAUAUAUA >5"
        document.getElementById("inputD6").value = ""
        document.getElementById("inputD5").value = ""
        document.getElementById("inputD4").value = ""
    }
});

buttonD7.addEventListener("click", (e) =>{
    e.preventDefault();
    let num = Number(document.getElementById("inputD7").value)

    if(num >= 10){
        document.body.style.backgroundColor = "cyan"
        inputF1.style.visibility = "hidden"
        lF1.style.visibility = "hidden"
        inputM4.style.backgroundColor = "brown"
    }
    else if(num < 10){
        document.body.style.backgroundColor = "aliceblue"
        inputF6.style.backgroundColor = "red"
        lF6.style.background = "purple"
        inputM7.style.fontSize = "200px"
        inputM7.style.color = "white"
    }

    document.getElementById("inputD7").value = ""
});