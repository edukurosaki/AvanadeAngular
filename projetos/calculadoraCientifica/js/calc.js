document.getElementById('display').value = " "

function calc(tipo, valor) {
if (tipo === 'acao') {

    if (valor === 'c') {
        document.getElementById('display').value = " "
    }

    if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
        document.getElementById('display').value += valor
    }

    if (valor === "=") {
        var campoValor = document.getElementById('display').value
       document.getElementById('display').value = parseFloat(eval(campoValor))
       
    }
    if (valor === "cos") {
        numberCos = document.getElementById('display').value
        document.getElementById('display').value = Math.cos(numberCos)
        
    }
    if (valor === "sin") {
        numberSen = document.getElementById('display').value
        document.getElementById('display').value = Math.sin(numberSen)
    }
    if (valor === "tan") {
        numberTan = document.getElementById('display').value
        document.getElementById('display').value = Math.tan(numberTan)
    }
    if (valor === "del") {
       valorIns = document.getElementById('display').value
       document.getElementById('display').value = valorIns.substring(0, valorIns.length - 1)
    }
    if (valor === "e^") {
       valorExponencial = document.getElementById('display').value
       document.getElementById('display').value = Math.exp(valorExponencial)
    }
    if (valor === "x2") {
       valorPotencia = document.getElementById('display').value
       document.getElementById('display').value = Math.pow(valorPotencia, 2)
    }
    if (valor === "√") {
       valorRaiz = document.getElementById('display').value
       document.getElementById('display').value = Math.pow(valorRaiz, 1/2)
    }
    
}else if(tipo === 'valor'){
   
    document.getElementById('display').value += valor
    
}
}
