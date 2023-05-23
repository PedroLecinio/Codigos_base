//                  PARTE 1 

// interface IAnimais{
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executarRugido?(alturaEmDecibeis: number): void;
// }

// interface IFelino extends IAnimais{
//     visaoNoturna: boolean;
// }

// const animal: IAnimais = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }
// //animal.executarRugido(5)

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }

//                  PARTE 2


interface IAnimais{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimais{
    visaoNoturna:boolean;
}

interface ICanino extends IAnimais{
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}
