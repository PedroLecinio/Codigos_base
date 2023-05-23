// Criando uma conta de um Banco
interface Iconta{

    nomeTitular: string
    saldo?: number

}
class Conta {
    private nomeTitular: string
    private saldo: number
    private ativa: boolean = true

    constructor({
        nomeTitular,
        saldo = 0
    }: Iconta){
        this.nomeTitular = nomeTitular,
        this.saldo = saldo
        console.log(`${nomeTitular}, Bem vindo ao Bank`)
    }

    meuSaldo = (): number => this.saldo


    depositar = (valor: number): void | boolean => {
        if(!this.ativa){
            console.log ('Conta desativada, impossível realizar depósito')
            return this.ativa
             
        }
        this.saldo += valor
        console.log(`Você depositou ${valor}. Seu novo saldo é ${this.saldo}`)
    }  

    sacar = (valor: number): void | number | boolean=> {

        if(!this.ativa){
            console.log ('Conta desativada, impossível realizar depósito')
            this.ativa
            return this.ativa
        }

        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`Você sacou ${valor}. Seu novo saldo é ${this.saldo}`)
            return this.ativa
        }



        console.log(`Saldo insulficiente. Você quer sacar ${valor}. Seu saldo atual é ${this.saldo}`)
        return this.ativa
    }

    cancelarConta = () => {
        if(this.saldo === 0){
            this.ativa = false
            console.log('Conta desativada')
            return this.ativa
        }

        console.log(`Impossível desativar a conta de ${this.nomeTitular}. Conta com pendência`) 
    }

}

const contaA: Conta = new Conta({nomeTitular: 'Pedro'}) 

contaA.cancelarConta()

// console.log('Antes do depósito', contaA.meuSaldo())
// contaA.depositar(100)
// console.log('Depois do depósito', contaA.meuSaldo())

// contaA.sacar(120)
// console.log('Depois do saque', contaA.meuSaldo())