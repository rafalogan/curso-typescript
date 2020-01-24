// string
let nome: string = 'joão';
console.log(nome);
// nome = 28;

// numbers
let idade: number = 27;
// idade = 'ana'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// Tipos explicitos;
let minhaIdade: number;
minhaIdade = 27;
// minhaIdade = 'idade é 27';
console.log(typeof  minhaIdade);

// Array
let hobbies: any[] = [
    'cozinhar',
    'Praticar Esporte'
];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ['Av Principal', 99, 'casa'];
console.log(endereco);

endereco = ['Rua importante', 1260, ''];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// Any
let carro: any = 'BMW';
console.log(carro);

carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// Tipos em Funçõe
function retornaMeuNome(): string {
  // return minhaIdade;
  return nome;
}
console.log(retornaMeuNome());

// function digaOi(): void {
//   console.log('Oi');
//   // return minhaIdade
// }
// digaOi();

function mutiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(mutiplicar(2.77, 5));

// funcoes como tipos
let calculo: (x: number, y:number) => number;
// calculo = digaOi();
// calculo;

calculo = mutiplicar;
console.log(calculo(5,6));

// Objetos e tipos
let usuario: { nome: string, idade: number} = {
  nome: 'Joana',
  idade: 27
};
console.log(usuario);
/** usuario = {};
usuario = {
  name: 'Maria',
  age:31
};
*/

usuario = {
  idade: 31,
  nome: 'Maria'
};
console.log(usuario);

// Desafio
/**
 * Criar um objeto fincionário com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe hora (número) e retorna uma string
 *    - Ponto normal (<= 8)
 *    - Fora do horário (> 8)
 * */

let funcionario: Funcionario;

funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number) : string {
    if (horario <= 8 ) return 'Ponto Normal';
    return 'Fora do Horário';
  }
};

console.log(funcionario);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// funcionario = {}

// tipos personalizados (Alias)

type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
};

const funcionario2: Funcionario = {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number) : string {
    if (horario <= 8 ) return 'Ponto Normal';
    return 'Fora do Horário';
  }
};

// Multiplos tipos unio types
let nota: number | string = 10;
console.log('Minha nota', nota);
nota = '5';
console.log('Minha nota', nota);

// checando tipos
let  valor = 30;
if (typeof valor === 'number') {
  console.log('É um Number!')
} else {
  console.log(typeof valor)
}

// tipo never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) falha('Precisa de nome');
    if (this.preco <= 0) falha('Preco inválido');
  }
};

produto.validarProduto();

// Null check
let altura = 12;
// altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string,
  tel1: string,
  tle2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '9865432',
  tle2: null
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tle2);

let podeSerNulo = null; // any
console.log(podeSerNulo);
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);

// Desafio
type Conta = {
  saldo: number
  depositar(valor: number): void;
}

type Correntista = {
  nome: string,
  contaBancaria: Conta,
  contatos: string[]
}

let contaBancaria: Conta = {
  saldo: 3456,
  depositar(valor) {
    this.saldo +=valor;
  }
};

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria,
  contatos: ['34567890', '98765432']
};

correntista.contaBancaria.depositar(5000);
console.log(correntista);