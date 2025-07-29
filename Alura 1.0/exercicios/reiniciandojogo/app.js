// Calcular IMC

//function calcularImc(altura, peso){
//   return peso / (altura*altura);
//}
//let resultadoImc = calcularImc(1.78, 88);
//console.log(`Seu IMC é igual a ${resultadoImc.toFixed(2)}`)


//Calcular Fatorial
//function calcularFatorial(numero){
//    if (numero == 0 || numero == 1){
//        return 1;
//    }else   {
//        return numero * calcularFatorial(numero-1);
//    }

//}

//Conversão do Dolár
function converterMoeda(dolar){
    let conversao = 4.80;
    return conversao*dolar;
}
let moedaBRL = parseInt(converterMoeda(30))
console.log(moedaBRL)