function gravar(){
    let vetor1 = Number(document.getElementById('vetor1').value)
    let vetor2 = Number(document.getElementById('vetor2').value)
    
    vetum.push(vetor1)
    vetdois.push(vetor2)
    
    console.log(vetum)
    console.log(vetrois)
}
function calcular(){
    let somaVet = []

    for(let i=0;i<5;i++){
        somaVet[i] = vetum[i] - vetdois[i]
    }
    console.log(somaVet)

    res.innerHTML = `${somaVet}`
}

let vetum = []
let vetdois = []

function gravarpsub(){
    let veto1 = Number(document.getElementById('veto1').value)
    let veto2 = Number(document.getElementById('veto2').value)
    
    vetum.push(veto1)
    vetdois.push(veto2)
    
    console.log(vetum)
    console.log(vetdois)
}