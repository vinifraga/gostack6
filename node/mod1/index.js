const express = require('express')
const nunjucks = require('nunjucks')
// inicia servidor http no express
const app = express()
// os middlewares podem interromper o fluxo padrão, então é necessário
// utilizar o parametro next pra informar que ele deve seguir o fluxo.
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

const users = ['Diego Fernandes', 'Robson Marques', 'Cleiton Souza']

// define uma rota, no caso sem rota para requisições get
// adiciona funções no res como .send e .json
// funções que recebem req e res no node chamamos de middleware
// um interceptador, processa e/ou retorna uma resposta.
app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

// escolhe a porta que o servidor irá escutar
app.listen(3000)

// });
// // possível adicionar vários middlewares para serem processados na rota;
// app.get("/nome/", logMiddleware, (req, res) => {
//   return res.json({
//     message: `Bem vindo, ${req.appName}`
//   });

// const logMiddleware = (req, res, next) => {
//   console.log(
//     `Host: ${req.header.host} | Url: ${req.url} | Method: ${req.method}`
//   );
//   // é possível alterar/adicionar campos da req para serem utilizados
//   // por outros middlewares.
//   req.appName = "GoNode";

//   return next();
// };
// // informo que TODAS as rotas devem executar esse middleware.
// app.use(logMiddleware);
