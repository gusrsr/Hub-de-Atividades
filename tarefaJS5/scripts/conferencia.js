btnConf = document.getElementById("btnConf")

numeros = []

btnConf.addEventListener("click", () =>{
    let pConf = document.getElementById("pConf")
    let i = -1;
    let soma = 0
    
    while(i != 0){
        i = parseFloat(prompt("Digite um numero"))
        if (i != 0){
            numeros.push(i)
            soma = soma + i
            pConf.textContent = soma
        }
        else if(i != Number){
            pConf.textContent = "Digite apenas NUMEROS"
        }
    }
});