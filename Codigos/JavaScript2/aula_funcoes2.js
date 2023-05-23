function escrevaMeuNome(nome){
    return ('Meu nome é ' + nome);
}

escrevaMeuNome('Pedro');

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('Pedro') + ' é Maior');
    } else {
        console.log('Menor');
    }
}


verificarIdade(19);