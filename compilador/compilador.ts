let canal: string = 'Gaveta';
let inscritos: number = 610243;

// canal = inscritos;
console.log(`Canal  = ${canal}`);

// let nome = 'Pedro';

function soma(a: any, b: any): any {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudar(isManha: boolean): string {
  let saudacao: string;

  if (isManha) {
    saudacao = 'Bom Dia!';
  } else {
    saudacao = 'Tenha uma Boa Vida!'
  }
  return saudacao;
}

console.log(saudar(true));