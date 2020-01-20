// let & const
let seraQuePode = '?';
console.log(seraQuePode);

let estaFrio =true;
if (estaFrio) {
  let acao = 'Colocar o casaco!';
  console.log(acao);
}

const cpf: string = '123.456.000-99';
// cpf = '789.101.123-78';
console.log(cpf);

var segredo = 'externo';
function revalar() {
  const segredo = 'interno';
  console.log(segredo);
}
revalar();
console.log(segredo);

{
  const def = 'def';
  console.log(def);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);

// Arrow Function
function somar(n1: number, n2: number): number {
  return n1+n2;
}
console.log(somar(2, 2));

const subitrair = (n1: number, n2: number) => n1 - n2;
console.log(subitrair(4, 6));

const saudacao = () => console.log('Olá!');
saudacao();

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa + '!');
falarCom('Lilian');

// this
// function normalComThis() {
//   console.log(this);
// }
// normalComThis();
//
// const nomalComThisEspecial = normalComThis.bind({ nome: 'Ana'});
// nomalComThisEspecial();
//
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();
//
// const arrowComThisEspecial = arrowComThis
//     .bind({nome: 'valkiria'});
// arrowComThisEspecial();

// Parâmetros padrão
function contagemRegessiva(inicio: number = 3, fim: number = inicio - 5): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}
contagemRegessiva();
contagemRegessiva(3);

// Spread e rest
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Mariana', 'Mayara'];
const turmaB: string[] = ['Lorena', ...turmaA, 'Francisco', 'Marcia'];
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
  console.log('a', a);
  return args;
}
const numeros = retornarArray(1,2, 4, 5, 6, 345, 64);
console.log(numeros);
console.log(retornarArray(...numbers));

// Rest e Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log('1)', a, b, c)
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  // console.log(Array.isArray(params));
  console.log('2)', ...params)
}
tuplaParam2(...tupla);

// Destructuring (Array)
const caracteristcas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristcas[0];
// const ano = caracteristcas[1];

const [ motor, ano] = caracteristcas;

console.log('motor', motor);
console.log('ano', ano);

// Destructuring (Objeto)
const item  = {
  nome: 'SSD 480GB',
  preco: 200,
  caracteristcas: {
    w: 'importado'
  }
};

const nomeItem = item.nome;
const precoItem = item.preco;

const { nome: n, preco, caracteristcas: {w}} = item;

console.log('nome', n);
console.log('preco', preco);
console.log('w', w);

// Template string
const usuarioID: string = 'SuporteCod3r';
const notificacoes: string = '19';
let boasVindas = 'Boas vindas ' + usuarioID + 'Notificações' + notificacoes;

boasVindas = `
Boas vindas ${usuarioID},
Notificações ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;

console.log(boasVindas);

// Desafios
// Exercicio 1
const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

// Exercício 2
const dizerOla = (nome: string): void => {
  console.log(`Olá ${(nome) ? nome : 'Pessoa'}`);
};

dizerOla('');
dizerOla('Anna');

// Exercício 3
const nums = [-3, 33, 38, 5];
//imprimir menor Valor
console.log(Math.min(...nums));

//Exercício 4
const array = [55, 20];
// Adicionar todos os elementos de "nums" em array
array.push(...nums);
console.log(array);

// Exercício 5
const notas = [8.5, 6.3, 9.4];
console.log('Notas', ...notas);

// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12};
const { primeiroNome, experiencia } = cientista;

console.log(primeiroNome, experiencia);

// Promisse & callback
function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('3s depois...')
  }, 3000)
}

esperar3s(function (resultado:string) {
  console.log(resultado);
});
