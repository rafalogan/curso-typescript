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

// Tipos em