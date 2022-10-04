import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente01 = new Cliente("Amisterdan", "00464761301",99010210937);
const contaAmisterdan = new ContaCorrente(1001, cliente01);
contaAmisterdan.depositar(1000);
contaAmisterdan.sacar(500);

const contaPoupanca = new ContaPoupanca(100,cliente01,1001);

console.log(cliente01);
console.log(contaPoupanca);
