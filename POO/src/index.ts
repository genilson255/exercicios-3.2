import Conta from "./conta";

const minhaConta = new Conta(1000);
try {
  //minhaConta.debito(1);
} catch (error) {
  console.log(String(error));
  
}

try {
  minhaConta.credito(1000);  
} catch (error) {
  console.log("Moeda valida, Credito efetuado com sucesso");
  
}

console.log(minhaConta.saldo);
