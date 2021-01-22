let limit = [2, 0];
for (let i = 0; i < limit.length; i++) {
    let line = limit;
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1); // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}