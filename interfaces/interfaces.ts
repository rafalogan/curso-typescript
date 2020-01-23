interface Humano {
  nome: string
}

function sauddarComOlar(pessoa: Humano) {
  console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana';
}

const pessoa = {
  nome: 'João',
  idade: 27
};
sauddarComOlar(pessoa);
mudarNome(pessoa);
sauddarComOlar(pessoa);
