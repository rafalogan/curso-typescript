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

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);
