const express = require('express')

const app = express()
app.use(express.json());
const port = 3000

app.post('/usuario', (req, res) => {
  if (req.body.id != 1) {
    res.status(201).send({
      mensagem: "Usuario cadastrado com sucesso",
      usario: {
        ...req.body
      }
    })
  }else {
    res.status(403).send({
      mensagem: "Usuario de ID ja existe na base de dados"
    })
  }
})
app.get('/usuario', (req, res) => {
  res.send('LISTA USUARIO')
})

app.put('/usuario', (req, res) => {
  res.send('EDITA USUARIO')
})

app.delete('/usuario', (req, res) => {
  res.send('DELETA USUARIO')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})