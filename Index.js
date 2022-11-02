import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente01 = new Cliente("Amisterdan", "00464761301",99010210937);

const contaAmisterdan = new ContaCorrente(cliente01, 1001);
const contaPoupanca = new ContaPoupanca(50,cliente01,1001);




