import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente01 = new Cliente("Amisterdan", "00464761301",99010210937);
const contaAmisterdan = new ContaCorrente(1001, cliente01);
contaAmisterdan.depositar(1000);
contaAmisterdan.sacar(500);

const cliente02 = new Cliente("Edilania", 123456789, 987654321);
const contaEdilania = new ContaCorrente(11002,cliente02);

contaAmisterdan.transferencia(300,contaEdilania);

console.log(contaAmisterdan);