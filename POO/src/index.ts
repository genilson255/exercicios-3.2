import Conta from "./conta";

const minhaConta = new Conta(1000);
// minhaConta.saldo = 1000;
minhaConta.debito(100);
console.log(minhaConta.saldo);
