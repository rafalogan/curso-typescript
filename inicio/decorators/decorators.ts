function logarClasse(constructor: Function) {
	console.log(constructor);
}

function decoratorVazio(_: Function) {

}

function logarClasseSe(valor: boolean) {
	return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: {a: string, b?: number}) {
	return (_: Function): void => console.log(`${obj.a} ${obj.b}`);
}

type Constructor = { new(...args: any[]): {}};

function logarObjeto(constructor: Constructor) {
	console.log('Carregado...');
	return class extends constructor {
		constructor(...args: any[]) {
			console.log('Antes...');
			super(...args);
			console.log('Depois...');
		}
	}
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface  Eletrodomestico{
	imprimir?(): void;
}

// @logarClasse
// @decorator({a:'Teste', b: 321})
// @logarClasseSe(true)
@logarObjeto
@imprimivel
class Eletrodomestico {
	constructor() {
		console.log('novo ...')
	}
}

function imprimivel(constructor: Function) {
	constructor.prototype.imprimir = function () {
		console.log(this);
	}
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmim
const usuarioLogado = {
	nome: 'Aloy Boebel Candeira',
	email: 'aloy@aloy.com',
	admin: true
};

@perfilAdmin
class MudancaAdministrativa {
	critico() {
		console.log('Algo crítico foi alterado!')
	}
}

new MudancaAdministrativa().critico();

function perfilAdmin<Tipo extends Constructor>(constructor: Tipo) {
	return class extends constructor {
		constructor(...args: any[]) {
			super(...args);
			if (!usuarioLogado || !usuarioLogado.admin) throw new Error('Sem permissão!');
		}
	}
}


class ContaCorrente {
	@naoNegativo
	private saldo: number;

	constructor(saldo: number) {
		this.saldo = saldo;
	}

	@congelar
	sacar(@paramInfo valor: number) {
		// if (valor <= this.saldo) {
			this.saldo -= valor;
			return true
		// }
		// return false
	}

	@congelar
	getSaldo() {
		return this.saldo.toFixed(2);
	}
}

const contaCorrente = new ContaCorrente(10248.57);
console.log(contaCorrente.getSaldo());
contaCorrente.sacar(5000);
console.log(contaCorrente.getSaldo());

// contaCorrente.getSaldo = function() {
// 	return 	this['saldo'] + 7000;
// };
contaCorrente.sacar(5000);
console.log(contaCorrente.getSaldo());


// Object.freeze
function congelar(target: any,
									propertieName: string,
									descriptor: PropertyDescriptor) {
	console.log(target);
	console.log(propertieName);
	descriptor.writable = false;
}

function naoNegativo(target: any, propertieName: string) {
	delete target[propertieName];
	Object.defineProperty(target, propertieName, {
		get: function (): any {
			return target['_' + propertieName];
		},
		set: function (valor: any): void {
			if (valor < 0) throw new Error('Saldo Inválido');
			target['_' + propertieName] = valor;
		}
	})
}

function paramInfo(target: any, methodName: string, paramIndex: number) {
	console.log(`Alvo: ${target}`);
	console.log(`Método: ${methodName}`);
	console.log(`Índice Param: ${paramIndex}`);
}
