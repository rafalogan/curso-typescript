class Data {
  // Público por padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

}

const aniversario = new Data(31);
aniversario.dia = 7;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data;
casamento.ano = 2017;
console.log(casamento);

class DataEsperta {

  constructor(
      public dia: number = 1,
      public mes: number = 1,
      public  ano: number = 1970) {
  }

}

const aniversarioEsperto = new DataEsperta(31);
aniversarioEsperto.dia = 7;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

// Desafio Classe Produto
class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0) {
  }

  precoComDesconto(): number{
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto().toFixed(2)} (${this.desconto * 100}% off)`;
  }
}

const produto1 = new Produto('macbook pro', 9899);
produto1.desconto = 0.10;
const produto2 = new Produto('iPhone 11', 4999, 0.20);

console.log(produto1.resumo());
console.log(produto2.resumo());

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
      public marca: string,
      public modelo: string,
      private velocidadeMaxima: number = 200) {

  }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = (delta > 0) ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const  carro1 = new Carro('Ford', 'New fiesta', 220);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(20).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

// simiular "erros"
// carro1.velocidadeAtual = 300;
// console.log('atual ->', carro1.velocidadeAtual);
//
// carro1.velocidadeMaxima = 500;
// console.log('Máxima ->', carro1.velocidadeMaxima);
//
// carro1.alterarVelocidade(150);
// console.log('atual ->', carro1.velocidadeAtual);

class Ferrari extends Carro {

  constructor(modelo: string, velociadaeMaxima: number) {
    super('Ferrari', modelo, velociadaeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari( 'F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

// Getters & Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) this._idade = valor;
  }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1);

// Atributos e Métodos estáticos
class Matematica {
  static PI: number = 3.1416;

   static areaCirc(raio: number): number {
    return this.PI * (raio * raio)
  }
}

console.log(Matematica.areaCirc(4));