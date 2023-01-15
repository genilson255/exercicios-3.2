export default class Conta {
    private _saldo = 0;

    constructor(s: number){
        this.saldo = s;
    }
    getSaldo(name: string){        
        if(name === "Genilson"){
            return this._saldo; 
        }
        console.log(`Usuario Autorizado`);
        
    }

    set saldo(saldo: number){
        this._saldo = saldo;
    }
}