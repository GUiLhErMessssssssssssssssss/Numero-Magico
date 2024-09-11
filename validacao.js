function verificaValorChuteValido(chute){
    const numero = chute

    if(chuteForInvalido(numero)){
        console.log("Valor invalido")
    }
    if(numeroForMenorQueOValorpermitido(numero))
    {
        console.log("Valor inválido:O numero secreto precisa estar entre $(menorValor") e $(maiorValor)
    }

}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorque o permitido
