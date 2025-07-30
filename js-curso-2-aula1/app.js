let listaNumerosSorteados = [];
let limiteNumero = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){         //Criada a função que permite modificar o texto da tela; Usando os parametros tag para selecionar tipo 'h1' e texto para colocar o texto que quiser;
    let campo = document.querySelector(tag);    //
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2}); // Usando a biblioteca responsiveVoice para ler o texto em voz alta;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${limiteNumero}`);
}
exibirMensagemInicial(); // Caso a função não apareça, chame ela para fora;

function verificarChute(){
    let chute = document.querySelector('input').value; //Comando que lê o valor do chute;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa' ; // Se for >1 mostre tentativas :(caso contrario) tentativa
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',`${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');    //Criando variaveis que mostram se o número é maior ou menor;
        } else {
            exibirTextoNaTela('p','O número secreto é maior!');
        }
    } tentativas++;
    limparCampo();
}
// Parseint para gerar um número inteiro; 
function gerarNumeroAleatorio(){
    let quantidadeNumerosNaLista = listaNumerosSorteados.length; // Definindo a quantidade de números possíveis;
    if (quantidadeNumerosNaLista == limiteNumero){
        listaNumerosSorteados = []; // Se a lista tiver 4 números, limpa a lista para sortear novamente;
    }
   let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
   if (listaNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//Para remover o ultimo elemento do array, use o comando pop();

//Para adicionar um elemento no final do array, use o comando push();

//Deploy: Significa publicar o código em um servidor para que outras pessoas possam acessar;

//Vamos instalar o Git agora, que é um sistema de controle de versão, e o Github, que é uma plataforma para hospedar projetos de código-fonte;

//Para adicionar o repositório remoto, use o comando: git remote add apelido url_do_repositorio;

//Para listar os repositórios remotos, use o comando: git remote -v;

//Para Remover um repositório remoto, use o comando: git remote remove apelido;

//Para alterar a url de um repositório remoto, use o comando: git remote set-url apelido nova_url; //'git remote set-url origin https://github.com/seu-usuario/seu-repositorio.git'/

//Para alterar o nome do repositório remoto use git remote rename apelido novo_nome; //

//Use "git remote add origin url-do-repositorio-no-github" para adicionar o repositório remoto;

//Vamos usar o comando "git push origin main" para enviar as alterações para o repositório remoto no GitHub;

//O comando "git push" envia as alterações locais para o repositório remoto;

//Git clone é usado para clonar um repositório remoto para o seu computador;

//Adicionando comentários no Git: use o comando "git commit -m 'sua mensagem aqui'" para adicionar uma mensagem ao commit;

//Se esta trabalhando em dupla ou em grupo, use o comando "git pull origin main"