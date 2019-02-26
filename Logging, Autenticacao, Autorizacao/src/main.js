//imports

const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const livrosRepo = require('./repositories/LivrosRepository');

// contantes
const PORTA = 3000;

// configuração do servidor
app.set('view engine', 'ejs');

//configuração do middleware
app.use(morgan('short'))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('public'));

// rotas sao satisfeitas na ordem em que são declaradas
app.get('/', (req, res) => {
    res.send('Rota principal !');
});

//rotas para os recursos
app.use ('/auth', require('./controllers/autorizacao'));
app.use('/livros', require('./controllers/livros'));


//caso as outras rotas não funcionem
app.get('*', (req,res) => res.send('404'));

// Inicitando o servidor
app.listen(PORTA, () => {
    console.log('Aplicação no ar em http://localhost:' + PORTA);
});