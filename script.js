document.addEventListener('DOMContentLoaded', () => {
    numerosOperadores();
})

const visor = document.getElementById('visor')
//por meio dessa variavel visor o código dos calculos deve se basear
let valoresEquacao = []

function numerosOperadores() { //função de inputs no visor
    const btnNumeros = document.querySelectorAll('.numbers')
    btnNumeros.forEach((botao) => {
        botao.addEventListener('click', () => {
            valoresEquacao.push(botao.value) // envia para a array de numeros
            visor.innerHTML += botao.value // envia para o visor
        })
    })
}

function resultado() {
    // valoresEquação.join() -> junta os valores da lista sem espaçamento









    const valorVisor = visor.innerText
    alert(valorVisor)
    console.log(valoresEquacao)
} 
