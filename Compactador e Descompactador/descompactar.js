var extract = require('extract-zip')
extract('./data/arquivo.zip', {dir: './data'}, function (err) {
 // extraction is complete. make sure to handle the err
 console.log("Arquivo descompactado")
});