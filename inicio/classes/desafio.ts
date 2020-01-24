// Exercício 1 - classe
class Moto {
  nome: string;
  protected velocidade: number = 0;

  constructor(nome: string) {
    this.nome = nome
  }

  buzinar() {
    console.log('Toooooooooot!')
  }

  acelerar(delta: number) {
    this.velocidade = (delta >= 0) ? this.velocidade + delta : 0;
  }

  getVelocidade() {
    return this.velocidade;
  }
}

const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.getVelocidade());
moto.acelerar(30);
console.log(moto.getVelocidade());

// Exercício 2 - herança
abstract class Objeto2D {
  public base: number;
  public altura: number;

  constructor(base: number = 0, altura: number = 0) {
    this.base = base;
    this.altura = altura;
  }

  abstract area(): number;
}

class Retangulo extends Objeto2D {
  area(): number {
    return this.base * this.altura;
  }
}

const  retangulo = new Retangulo(5, 7);
retangulo.base = 10;
console.log(retangulo.area());

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = '';

  get primeiroNome() {
    return this._primeiroNome;
  }

  set primeiroNome(nome: string) {
    if (nome.length >= 3) {
      this._primeiroNome = nome
    } else {
      this._primeiroNome = ``;
    }
  }
}

const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Letícia';
console.log(estagiario.primeiroNome);
