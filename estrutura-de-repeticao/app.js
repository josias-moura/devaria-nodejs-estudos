const listaArgumentos = process.argv.slice(2);

console.log('.................Executando um FOR....................');
for (let controladorfor = 0;  controladorfor < listaArgumentos.length; controladorfor++){
    console.log(`Posicao ${controladorfor} valor lido = ${listaArgumentos[controladorfor]}`);
}

console.log('.................Executando um WHILE....................');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('.................Executando um WHILE....................');
let controladorDoWhile = 0;
do{
    console.log(`Posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)

console.log('.................Executando um FOR OF....................');
for(const argumento of listaArgumentos){
    console.log(`valor lido = ${argumento}`);
}