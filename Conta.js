export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    //Metodo para pegar as informações da Classe com GET

    get agencia() {
        return this._agencia;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo
    }

    depositar(novoDeposito) {
        //Lógica do if: Se o Novo Depósito for menor ou igual a 0, retornar sem alguração. Agora se o Novo deposito for maior ou um valor a mais ou igual, aplica esse valor.
        if (novoDeposito <= 0) {
            return
        }
        this._saldo += novoDeposito;
    }

    sacar(novoSaque) {
        let taxa = 1;
        return this._sacar(novoSaque, taxa);
    }

    _sacar(novoSaque, taxa) {
        const valorSacado = taxa * novoSaque;
        //Lógica do if: Se o valor do Saldo for maior ou igual o valor do Novo Saque, aplicar o método Sarcar
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    transferencia(valorTransferencia, conta) {
        //Criar uma variável para a novaTransferencia.
        const novaTransferencia = this.sacar(valorTransferencia);
        //aplicar o método depositar para a conta do cliente escolhido
        conta.depositar(novaTransferencia);
    }
}