interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void
}

function sauddarComOlar(pessoa: Humano) {
  console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana';
}

const pessoa: Humano = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
};
sauddarComOlar(pessoa);
mudarNome(pessoa);
sauddarComOlar(pessoa);
// sauddarComOlar({nome: 'Jonas', idade: 27,  altura: 1.75});
pessoa.saudar('Skywalker');

// Usando Classes..
class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date();

  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente;
meuCliente.nome = 'Han';
sauddarComOlar(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

// Interface Função
interface FuncaoCaulculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCaulculo;
potencia = (base: number, exp:number): number => {
  return Array(exp).fill(base).reduce((total, algoritimo) => total * algoritimo);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);

//Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

interface Object {
  log(): void
}

Object.prototype.log = function () {
  console.log(this.toString())
};

const x = 3;
const y = 2;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
  nome: 'Pedro',
  toString() {
    return this.nome
  }
};
cli.log();
