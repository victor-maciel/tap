const livros = [];
let proxId = 0;

const getLivrosIdx = id => {
    logger.info('Procurando o indice do livro com o id ' + id);
    let index = livros.map(l => l.id).indexOf(id);

    if (index < 0) {
        logger.error('Não foi encontrado livro com o id ' + id);
    }

    return index;

}
const LivrosRepository = {
    adicionar: (livro) => {
        let novo = {
            id: proxId++,
            titulo: livro.titulo,
            autor: livro.autor
        };
        livros.push(novo);
        return novo;
    },

    recuperar: id => livros[getLivrosIdx(id)],
    alterar: (id, novo) => {
        livros[getLivrosIdx(id)] = novo;
        novo.id = id;
        return novo;
    },
    remover: id => livros.splice(getLivrosIdx(id), 1),
    todos: () => livros
};

module.exports = LivrosRepository;
