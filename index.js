const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

 // Ler a pasta public
    app.use(express.static('public'));

 // Config
 // Template Engine

    app.engine('handlebars',handlebars.engine({defaultLayout:'main', runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true, 
        },
    }))

    app.set('view engine', 'handlebars')
 // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

// Rotas
    app.get('/cad2', function(req, res){
    res.render('index2')
})

    app.get('/', function(req, res){
    Post.findAll().then(function(posts){     
    res.render('home', {posts:posts})
    })
    })

    app.get('/cad', function(req, res){
    res.render('formulario')

    })
   

    //Rota que vai ser enviado o formulario
    app.post('/add', function(req, res){
    Post.create({
    nome: req.body.nome,
    horario: req.body.horario
    })
    .then(function(){
    res.redirect('/')
    })
    .catch(function(erro){
    res.send("Houve um Erro na Postagem. " + erro)
    }) 
    })

    app.get('/deletar/:id', function(req,res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso")
        }).catch(function(erro){
            res.send("Esta postagem não existe")
        })
    })
    


app.listen(8081, function(){

 console.log("Servidor Rodando na URL http://localhost:8081");

})













// //Config
//     //Template Engine
//     app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
//     app.set('view engine', 'handlebars')

// //Body parser
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())

// //conexão com o banco de dados//
// const sequelize = new Sequelize('sistemadecadastro', 'root', '1234567',{
//     host: "localhost",
//     dialect: 'mysql'
// })


//     app.get('/', function(req, res){
//         Post.findAll().then(function(posts){
//         res.render('home', {nome: 'ea', sobrenome:"joe" })
//         })
//     })


//     app.get('/cad', function(req, res){
//         // res.send('nota de cadastro de posts')
//         res.render('formulario')
//     })

//     // app.post('/add2', function(req, res){
//     //     res.send('Formulário recebido!')
//     // })

//     // app.post('/add', function(req, res){
//     //     res.send("Texto: "+ req.body.titulo +" Conteudo:"+req.body.conteudo)
//     // })

 


//         app.post('/add', function(req, res){
//             Post.create({
//                 titulo: req.body.titulo,
//                 conteudo: req.body.conteudo
//             }).then(function(){
//                 res.redirect('/')
//             }).catch(function(erro){
//                 res.send("Houve um erro"+ erro)
//             })
//     })

//     app.listen(8080,function(){
//     console.log('sistema ok!')
//     });

// // const http = require('http');

// // const hostname = '127.0.0.1';

// // const port = 3000;

// // const server = http.createServer((req,res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-type','text/plain');
// //     res.end('Hello from Lucas');

// // });

// // server.listen(port,hostname, () => {
// //     console.log("servidor rodando!");
// // })