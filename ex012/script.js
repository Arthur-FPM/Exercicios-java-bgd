let ValorDolar = prompt("Digite um valor em Dolares:")
ValorDolar = parseFloat(ValorDolar)
    TaxaCambio = 5.30
let ValorReais = ValorDolar * TaxaCambio
alert(`O valor em Dolares é  ${ValorReais.toFixed(2)}`)