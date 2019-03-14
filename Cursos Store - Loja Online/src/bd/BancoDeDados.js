const PRODUTOS = [
    {nome: 'Advanced JavaScript Concepts', preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/1501104_967d_11.jpg"},
    {nome: 'JavaScript - DOMinator project apply JavaScript learn DOM ', preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/2221678_c29f.jpg"},
    {nome: 'Build a Realtime App with React Hooks and GraphQL', preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/2222648_8512.jpg"},
    {nome: 'Learn and Understand Angular and NodeJS- A Developers Course ', preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/2195180_101f_2.jpg"},
    {nome: 'From A Non Programmer To Full Stack .NET Developer ', preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/2020464_1dca.jpg"},
    {nome: 'Code with Node: Learn by Doing' , preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/2215346_28a6_2.jpg"},
    {nome: 'React Hooks Tutorial - Master React Hooks Development ', preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/2227364_2d77.jpg"},
    {nome: 'Mastering Django Part 1 - AJAX, Class Based Views, Forms ', preco: 23.99, imagem: "https://udemy-images.udemy.com/course/240x135/2222446_c673.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;