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
       document.getElementById('display').value = eval(campoValor)
    }
    
}else if(tipo === 'valor'){
   
    document.getElementById('display').value += valor
}}
