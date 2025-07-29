//Enquanto (while)
Math.random 
let numeroSecreto = 6;
let chute;
let tentativas = 1;
alert('Bem vindo ao Jogo!');
alert('Adivinhe um número entre 1 e 10');
while (chute != numeroSecreto) {
    chute = prompt('Digite seu chute: ');
        if (chute == numeroSecreto) {
            break
        }else {
            if (chute < numeroSecreto){
            alert(`O número secreto é maior que ${chute}`);
        }   else{
            alert(`O número secreto é menor que ${chute}`);
        }
    } //tentativas = tentativas + 1;
        tentativas++
}
//        if (tentativas >1){
//            alert(`Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas`);
//        }else{
//            alert(`Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa`);
//        }

//Para ler de outra forma e deixar o código mais bonito, vamos usar outro modelo//
let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';