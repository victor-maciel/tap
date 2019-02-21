const fs = require('fs');
const archiver = require('archiver');

let saida = fs.createWriteStream('./data/arquivo.zip');
let compactador = archiver('zip');

saida.on('close', () => {
    console.log(compactador.pointer() + 'bytes totais');
    console.log("Arquivo compactado");
});

compactador.pipe(saida);
var arquivo = __dirname + '/data/file1.txt';
compactador.append(fs.createReadStream(arquivo), { name: 'file1.txt' });
compactador.finalize();

