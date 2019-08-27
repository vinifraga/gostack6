const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

const checkMiddleware = (req, res) => {
  const {
    body: { age }
  } = req
  if (age >= 18) {
    return res.redirect(`/major?idade=${age}`)
  } else {
    return res.redirect(`/minor?idade=${age}`)
  }
}

const idadeMiddleware = (req, res) => {
  const {
    query: { idade }
  } = req
  if (idade) {
    let textView
    if (idade >= 18) {
      textView = 'maior'
    } else {
      textView = 'menor'
    }
    return res.render('idade', { idade, textView })
  } else {
    return res.redirect('/')
  }
}

app.get('/', (req, res) => res.render('home'))
app.post('/check', checkMiddleware)
app.get('/major', idadeMiddleware)
app.get('/minor', idadeMiddleware)

app.listen(3000)
