const express = require('express');
const router = express.Router();
const livrosRepo = require('../repositories/LivrosRepository');
const seguranca = require('../util/seguranca');


//o prefixo /livros nao é necessário
router.get('/', (req, res) =>
    res.json(livrosRepo.todos())
    //res.setEncoding('Listando todos os livros')
);
router.get('/id', (req, res) =>
    res.json(livrosRepo.recuperar(parseInt(req.params.id)))
    // res.send('retorna o livro ' + req.params.id)
);


//rotas seguras
router.post('/', seguranca.autorizaJWT, (req, res) => {
    res.json(livrosRepo.adicionar(req.body));
    // res.sendStatus(200);
    // res.send('Adiciona um livro')
});
router.put('/:id',seguranca.autorizaJWT, (req, res) =>{
    res.json(livrosRepo.alterar(parseInt(req.params.id), req.body));
    //req.sendStatus(200);
    //res.send('Altera o livro' + req.params.id)
});
router.delete('/:id', seguranca.autorizaJWT, (req, res) =>{
    livrosRepo.remover(parseInt(req.params.id));
    res.sendStatus(200);
    //res.send('Remove o livro ' + req.params.id)
});

module.exports = router;