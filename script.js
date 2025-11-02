document.addEventListener('DOMContentLoaded', () => {
    numerosOperadores();
})

//variavel de controle para saber estado da equação
let ultimoResultado = false 
let ultimoResultadoValor = 0
let valorSalvo = 0

const visor = document.getElementById('visor')
//por meio dessa variavel visor o código dos calculos deve se basear
let valoresEquacao = []

function numerosOperadores() { //função de botões e visor
    const btnNumeros = document.querySelectorAll('.numbers')
    //PARA CADA CLIQUE EM ALGUM BOTÂO 
    btnNumeros.forEach((botao) => {
        botao.addEventListener('click', () => {
            //INDIVIDUALMENTE
            let ultimoValorClicado = botao.value 
            valoresEquacao.push(botao.value) // envia para a array de numeros
            visor.innerHTML += ultimoValorClicado // envia para o visor
            
            // console.log(ultimoValorClicado)

            // if (ultimoResultado == false) { //se não houver um ultimo resultado
            //     return 
            // }
            // else if (ultimoResultado == true){
            //     console.log(valorSalvo + "virou true")
            // }
            
        })
    })
}

function resultado() {
    //CALCULO BASE
    const calculo = math.evaluate(valoresEquacao.join(""))  // math.evalute() -> faz o mesmo que eval() porem com math.js tem mais segurança de que não seja qualquer coisa executada
    visor.innerHTML = calculo


    // informan que tem um resultado guardado
    // ultimoResultado = true
    // ultimoResultadoValor = calculo

    // valoresEquacao.join() // -> junta os valores da lista sem espaçamento


    // recomeço de equação 
    

} 
