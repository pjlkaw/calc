document.addEventListener('DOMContentLoaded', () => {
    numerosOperadores();
})

//variavel de controle para saber estado da equação
let ultimoResultado = false

const visor = document.getElementById('visor')
//por meio dessa variavel visor o código dos calculos deve se basear
let valoresEquacao = []

function numerosOperadores() { //função de botões e visor
    const btnNumeros = document.querySelectorAll('.numbers')
    //PARA CADA CLIQUE EM ALGUM BOTÂO 
    btnNumeros.forEach((botao) => {
        botao.addEventListener('click', () => {
            let ultimoValorClicado = botao.value

            // Numeros e operadores
            const listaNumeros = !isNaN(parseFloat(ultimoValorClicado)) || ['(', ')', '.', ','].includes(ultimoValorClicado);
            const listaOperadores = ['+', '-', '/', 'x'].includes(ultimoValorClicado); // .includes. -> se houver retona boleano
            // true = int | false = + |

            //VALIDAÇÃO COM if()
            if (ultimoResultado) {
                if (listaNumeros) {
                    valoresEquacao = [] // clicou em numero = reiniciar a conta
                }
                ultimoResultado = false
            }
            if (ultimoValorClicado == "C") {
                ultimoResultado = false
                valoresEquacao = []
                ultimoResultado = false
                visor.innerHTML = 0
                return
            }
            if (ultimoValorClicado == "DEL") {
                ultimoResultado = false
                valoresEquacao.pop()
                ultimoResultado = false
                atualizarVisor()
                console.log(valoresEquacao)
                return
            }
            if (ultimoValorClicado === 'x') {
                valoresEquacao.push('*')
            }
            else if (ultimoValorClicado === ',') {
                valoresEquacao.push('.')
            }
            else {
                valoresEquacao.push(botao.value) // envia para a array de numeros
            }
            atualizarVisor()
        })
    })
}

function resultado() {
    if (valoresEquacao.length < 1) {
        return
    }
    else {
        if (validarExpressao(valoresEquacao.join(''))) { //se válido e possivel a equação
            ultimoResultado = true // serve para saber se há um resultado - vai ser usado na function numerosOperadores()

            //CALCULO BASE
            let calculo = math.evaluate(valoresEquacao.join(""))  // faz o mesmo que eval() porem com math.js tem mais segurança de que não seja qualquer coisa executada
            valoresEquacao = []
            visor.innerHTML = calculo

            valoresEquacao = [calculo.toString()];
            console.log(valoresEquacao)
        }
        else {
            return
        }
    }
}

function atualizarVisor() {
    const visorString = valoresEquacao.join('').replace(/\*/g, 'x').replace(/\./g, ',') // envia para o visor
    visor.innerHTML = visorString || '0'
}

function validarExpressao(exp) { //validar se a conta pode ser executada usando mathjs
    try { //tentar
        math.evaluate(exp) // valida a possibilidade da conta ser executada e retornta true
        return true;
    }
    catch { //caso contrario aparece alerta e retorna false
        const alert = document.getElementById('alert')
        alert.className = 'alertOn'
        alert.innerHTML = "A expressão não pode ser realizada"
        setTimeout(() => {
            alert.className = 'alertOff'
        }, 2500)
        return false;
    }
}

//enquanto o visor for 0, piscar - setTimeInterval(() => {}, 1000)
