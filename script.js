/*
// Exercício 1 | Condição simples:
// Verificando se a velocidade está acima de 80km, se estive, leva multa:

const velocidade = 100;
if(velocidade > 80) {
    console.log(`Você está acima de velocidade máxima permitida. TEJE MULTADADE`);
}
*/

// -------------------------------------

/*
// Exercício 2 | Condição composta:
// Verificando se está ou não chovendo:

const estaChovendo = true;
if(estaChovendo) {
    console.log(`Minhas roupas tudo no varal`)
} else {
    console.log(`Hmm, vitamina D, solzinhoo, bora rolezar`)
}
*/

// -------------------------------------

/*
// Prática guiada I - A

const booleano1 = false;
const booleano2 = true;

// if(booleano1){
//     alert(`Booleano 1 é true`)
// }else{
//     alert(`Booleano 1 é false`)
// }

// Prática guiada I - B

const booleano3 = 'true';

// if (booleano1 === booleano2) {
//     alert(`Booleano 1 e Booleano 2 são iguais`);
// } else if (booleano2 === booleano3) {
//     alert(`Booleano 2 e Booleano 3 são iguais`);
// } else if (booleano1 === booleano3) {
//     alert(`Booleano 1 e Booleano 2 são iguais`);
// } else {
//     alert(`Não existem valores iguais!`)
// }

// -------------------------------------

// EXEMPLO: Bolinho de chuva
// OBS: O if verifica se é true. Se eu coloco exclamação na frente do nome da const que estou verificando, o if verficica se é false em vez de verificar se é true.
const temOvo = true;
const temFarinha = true;
const temLeite = true;
const temAcucar = true;

if(!temOvo) {
    console.log(`Não tem ovo, deixa quieto!`);
} else if (!temFarinha) {
    console.log(`Tem ovo, mas não te farinha. Deixa quieto`)
} else if (!temLeite) {
    console.log(`Não tem leite`)
} else if (!temAcucar) {
    console.log(`Tem ovo, tem farinha, tem leite, mas não tem açúcar`)
} else {
    console.log(`Temos todos os ingredientes`)
}
*/

// -------------------------------------

// PRÁTICA GUIADA II
// const idade = Number(prompt('Qual a sua idade'));
const idade = 16;

// if(idade < 16){
//     console.log(`Você NÃO PODE votar!`)
// } else if (idade < 18 || idade >= 70) {
//     console.log(`Você PODE votar! - facultativo`)
// } else if (idade >= 18) {
//     console.log(`Você DEVE votar!`)
// } else {
//     console.log(`Dado inválido`)
// }

// EXERCÍCIO DE FIXAÇÃO:
// ENUNCIADO: 
/*
* Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10;
* Crie um if que verifica se a média é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada;
* Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida;
* Adicione um else if antes de reprovar, que verifica se a média é maior ou igual a 3. Caso seja, imprima “Recuperação”;
* Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Estudante reprovade”;
* Adicione um último else, que imprima “dado inválido” caso nenhuma das condições anteriores seja atendida;
*/

// const media = Number(prompt('Digite a sua média'));
// // const media = 7;

// if (media>=5) {
//     console.log(`APROVADA`);
// } else if (media>=3) {
//     console.log(`RECUPERAÇÃO`);
// } else if (media<3) {
//     console.log(`REPROVADE`);
// } else {
//     console.log(`Dados inválidos`);
// }

// Experimentando pegar data:
const data = new Date();
const hora = data.getHours();
const minuto = data.getMinutes();
const segundo = data.getSeconds();

// console.log(data)
console.log(`A hora atual é ${hora}:${minuto}:${segundo}`);