
const fs = require('fs');
const archiver = require('archiver');

var saida = fs.createWriteStream('target.zip');
var compactador = archiver('zip');

saida.on('close', () => {
    console.log(compactador.pointer() + ' bytes totais');
});

//grava os arquivos na saida

compactador.pipe(saida);

var arquivo = __dirname + '/index.js';
compactador.append(fs.createReadStream(arquivo), {name: 'index.js'});

compactador.finalize();
