function echo(objeto: any) {
	return objeto;
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({nome: 'João'}));

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
	return objeto
}

console.log(echoMelhorado('João').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({nome: 'João'}).nome);

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
	args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia', 'Karla']);
imprimir<{ nome: string, idade: number }>([
	{nome: 'Thais', idade: 22},
	{nome: 'Cristina', idade: 23},
	{nome: 'Betina', idade: 24}
]);

type Aluno = {
	nome: string,
	idade: number
};

imprimir<Aluno>([
	{nome: 'Tatyane', idade: 20},
	{nome: 'Camila', idade: 23},
	{nome: 'Barbara', idade: 24}
]);

// Tipo Genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma Coisa'));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
	constructor(public operando1: T, public operando2: T) {}

	abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom', 'Dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'Opa').executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
	executar(): number {
		return this.operando1 + this.operando2;
	}
}

console.log(new SomaBinaria(3, 2).executar());
console.log(new SomaBinaria(30, 50).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{

	getTime(data: Data): number {
		const { dia, mes, ano } = data;
		return new Date(`${mes}/${dia}/${ano}`).getTime();
	}

	executar(): string {
		const times1 = this.getTime(this.operando1);
		const times2 = this.getTime(this.operando2);
		const diferenca = Math.abs(times1 - times2);
		const dia = 1000 * 60 * 60 * 24;

		return `${Math.ceil(diferenca / dia)} dia(s)`;
	}
}

const data1 = new Data(23, 1, 2020);
const data2 = new Data(7, 12, 2020);
console.log(new DiferencaEntreDatas(data1, data2).executar());

// Classe Fila
class Fila<T> {
	private fila: Array<T>;

	constructor(...args: T[]) {
		this.fila = args;
	}

	entrar(elemento: T) {
		this.fila.push(elemento);
	}

	proximo(): T | null {
		if (this.fila.length >= 0 && this.fila[0]) {
			const primeiro = this.fila[0];
			this.fila.splice(0, 1);
			return primeiro;
		}

		return null
	}

	imprimir() {
		console.log(this.fila);
	}
}

const fila = new Fila<string>('Gi', 'Pietra', 'Ana', 'Luna');

fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();

console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());

fila.imprimir();

