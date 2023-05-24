const notas = [];

//Pop: Remove o último item na lista
//shift: Remove o primeiro item na lista
//Push: adiciona itens na lista
notas.push(10);
//notas[0] = 2;


notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);