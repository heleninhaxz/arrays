let vetsete = []

function gravar(){
    let vetx = Number(document.getElementById('vetx').value)
    
    vetsete.push(vetx)
    
    console.log(vetsete)
}
function calcular(){
    let seteVet = 0

    for(let i=0;i<vetsete.length;i++){
        seteVet += vetsete[i]
    }
    console.log(seteVet)

    res.innerHTML = "O resultado final é: " + (seteVet)
}