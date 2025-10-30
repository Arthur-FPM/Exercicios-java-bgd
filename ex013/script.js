let valor1 = number(prompt("digite o primeiro valor:"))
let valor2 = number(prompt("digite o segundo valor:"))
let temp = valor1
valor1 = valor2
valor2 = temp
alert(`Valor após a troca ${valor1} - ${valor2}`)