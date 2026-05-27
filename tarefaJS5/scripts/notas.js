btnNota = document.getElementById("btnNota")

let alunos = ["Ana", "Carlos", "Marina", "João", "Fernanda", "Lucas", "Beatriz", "Rafael", "Juliana", "Pedro"];
let notas = [8, 7, 9, 7, 10, 6, 8, 8, 10, 4];

btnNota.addEventListener("click", (e)=>{
    e.preventDefault();
    let lista = document.getElementById("lista")
    let paraNota = document.getElementById("pNota")
    let soma = 0
    let i = 0
    lista.textContent = ""
    
    for(i = 0; i < alunos.length && notas.length; i++){
        let li = document.createElement("li")
        soma = soma + notas[i]
        resultado = soma / notas.length
        if (notas[i] >=  6){
            li.textContent = alunos[i] + ", Nota: " + notas[i] + " Foi aprovado!";
        }
        else{
            li.textContent = alunos[i] + ", Nota: " + notas[i] + " Foi reprovado!"
        }
        paraNota.textContent = resultado
        lista.appendChild(li)
    }
});