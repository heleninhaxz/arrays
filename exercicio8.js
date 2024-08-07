let veteoito = []
function gravar(){
    let vetx = Number(document.getElementById('vetx').value)
    
    veteoito.push(vetx)
    
    console.log(veteoito)
}
function calcular(){
    veteoito.reverse()

    console.log(veteoito)

    res.innerHTML = `${veteoito}`
}