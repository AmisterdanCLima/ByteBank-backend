import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        // Caso queira saber o número de Contas correntes, ela começa com 0 e vai sendo agregado 01 ca cada cliente anexado.
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1
    }

    //está sobrescrevendo o método sacar da class Conta
    sacar(novoSaque) {
        let taxa = 1.1;
        return this._sacar(novoSaque, taxa);
       
    }    
}