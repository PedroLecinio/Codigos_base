interface ICalcularIdade{
    nome: string,
    anoNascimento: number
    profissao?: string
}
function calcularIdade({
    nome,
    anoNascimento,
    profissao
}: ICalcularIdade): string{

    const idade: number = 2023 - anoNascimento

    if(profissao){
        return `Seu nome é ${nome}. Você tem ${idade} e sua profissão é ${profissao}`
    }
    return `Seu nome é ${nome}. Você tem ${idade} anos.`
}

const nome = 'Pedro'
const anoNascimento = 2003
const profissao = 'Desenvolvedor'

console.log(calcularIdade({nome, anoNascimento}))
console.log(calcularIdade({nome, anoNascimento, profissao}))