/*
    PARTE 1
const pedro = {
    //Coleção de dados - Chave : valor
    nome: "Pedro Lecinio",
    idade: 19,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
}  
}
//Adicionando ao objeto
pedro.altura = 1.69;
pedro.teste = 1;
//Removendo do objeto
delete pedro.teste;

//Chamando a function dentro do objeto

pedro.descrever();

//Puxando valores do objeto(Variável)
console.log(pedro.nome);
console.log(pedro.idade);
console.log(pedro);*/ 



//Definindo Classes 
//     PARTE 2

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

/*const pedro = new Pessoa('Pedro', 19);
const gustavo = new Pessoa('Gustavo', 17);


pedro.descrever();
gustavo.descrever(); */

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const pedro = new Pessoa('Pedro', 19);
const gustavo = new Pessoa('Gustavo', 17);

compararPessoas(pedro, gustavo);







