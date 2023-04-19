//Criando arrays - listas

const alunos = ["João", "Vitor", "Marina"];
//funciona por números também
//adicionar mais na lista, que o item vai para o final da lista
alunos.push('Renan');

//adicionar mais na lista, item vai para a posição que foi colocada  da lista
alunos[4] = 'Rafael';

//Para substituir em alguma posição
alunos[4] = 'Morales';

//Remover item útimo item
alunos.pop();

//remover primeiro item
alunos.shift();


//mostrar lista
console.log(alunos);
//mostra lista por posição
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);

