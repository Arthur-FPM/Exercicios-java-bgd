let ValorReais = prompt("Digite um valor em reais:")
ValorReais = parseFloat(ValorReais)
    TaxaCambio = 5.30
let ValorDolar = ValorReais / TaxaCambio
alert(`O valor em Reais é  ${ValorDolar.toFixed(2)}`)
