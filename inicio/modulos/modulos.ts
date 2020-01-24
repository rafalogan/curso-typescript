import  retangulo from "./retangulo";
import { areaCircunferencia as circ } from "./circunferencia";

console.log('Modulo Carregado...');
console.log(retangulo(50, 20));
console.log(circ(20));

const { digaOi } = require('./novo');
console.log(digaOi('Ana'));