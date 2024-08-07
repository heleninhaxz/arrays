function calcular(){
    let vetor = [1,2,3,4,5]
    let vetMult = []

    for(let i=0;i<5;i++){
        vetMult[i] = vetor[i] * 3
    }
    console.table(vetMult)

    let resposta = document.getElementById('resposta')
    resposta.innerHTML = "O resultado final é: " + (vetMult)
}