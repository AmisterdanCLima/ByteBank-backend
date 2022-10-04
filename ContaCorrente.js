import { Cliente } from "./Cliente.js";
export class ContaCorrente{
    static numeroDeContas = 0;
    
    constructor(agencia,cliente){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        // Caso queira saber o número de Contas correntes, ela começa com 0 e vai sendo agregado 01 ca cada cliente anexado.
        ContaCorrente.numeroDeContas += 1
    }

    //SET para incluir um novao Cliente a uma Conta Corrente
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    //Metodo para pegar as informações da Classe com GET

    get agencia(){
        return this._agencia;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }

    depositar(novoDeposito){
     //Lógica do if: Se o Novo Depósito for menor ou igual a 0, retornar sem alguração. Agora se o Novo deposito for maior ou um valor a mais ou igual, aplica esse valor.
        if(novoDeposito <= 0){
            return
        }
        this._saldo += novoDeposito;
    }

    sacar(novoSaque){
        //Lógica do if: Se o valor do Saldo for maior ou igual o valor do Novo Saque, aplicar o método Sarcar
        if(this._saldo >= novoSaque){
            this._saldo -= novoSaque;
            return novoSaque;
        }
    }

    transferencia(valorTransferencia, conta){
        //Criar uma variável para a novaTransferencia.
        const novaTransferencia = this.sacar(valorTransferencia);
        //aplicar o método depositar para a conta do cliente escolhido
        conta.depositar(novaTransferencia);
    }

}