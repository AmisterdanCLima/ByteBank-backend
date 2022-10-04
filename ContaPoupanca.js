export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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