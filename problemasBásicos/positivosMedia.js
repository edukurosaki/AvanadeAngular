
let arr = [2, -2, 3, -5, 7, 9];
//
function numPositive(arr) {
  return arr.filter(nr => nr > 0).length;
}
const filtePositive = numPositive(arr);
let arrPositiva = arr.filter(nr => nr > 0);


function media(arrPositiva){
    
    
    let average = arrPositiva.reduce((collectValue, currentValue) => collectValue + currentValue, 0);
    return average/filtePositive;

}
var mediaCompare = media(arrPositiva);

function compare(){
  let valor = Math.trunc(mediaCompare);
  let valorDecimal = (mediaCompare - valor).toFixed(2);
  let decimalString = valorDecimal.slice(3);
  
  if(decimalString <= 5){
    var alinhaValor = mediaCompare - 0.01;
    
  }else{
    var alinhaValor = mediaCompare;
  }
  return alinhaValor;
  
}
const mediaTotal = compare();



console.log(filtePositive);
console.log(mediaTotal.toFixed(1));


