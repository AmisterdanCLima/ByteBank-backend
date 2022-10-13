import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente01 = new Cliente("Amisterdan", "00464761301",99010210937);

const contaAmisterdan = new ContaCorrente(cliente01, 1001);
contaAmisterdan.depositar(500);
contaAmisterdan.sacar(100);

const contaPoupanca = new ContaPoupanca(50,cliente01,1001);
contaPoupanca.depositar(100);

console.log(contaPoupanca);
console.log(contaAmisterdan);
