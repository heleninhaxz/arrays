function calcular(){
    let vet = Number(document.getElementById('vet').value)
    let vetor = [1,2,3,4,5]
    let vetMult = []

    for(let i=0;i<5;i++){
        vetMult[i] = vetor[i] * vet
    }
    console.table(vetMult)

    let res = document.getElementById('res')
    res.innerHTML = "O resultado final é: " + (vetMult)
}