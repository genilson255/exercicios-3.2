import Conta from "./conta";
// teste 1
// const minhaConta = new Conta(1000);
// try {
//   //minhaConta.debito(1);
// } catch (error) {
//   console.log(String(error));
  
// }

// try {
//   minhaConta.credito(1000);  
// } catch (error) {
//   console.log("Moeda valida, Credito efetuado com sucesso");
  
// }

// console.log(minhaConta.saldo);

// Teste 2
const minhaConta = new Conta(1000);
const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);
// console.log(amanha);

const pagamento = new pagamento({
  conta: minhaConta, 
  valor: 100, 
  tipoPagamento: 'boleto', 
  vencimento: amanha, 
  descricao: 'Conta da claro';
});

pagamento.pagar();
console.log(minhaConta.saldo);


