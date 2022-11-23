const express = require('express')
const routes = express.Router()

let db = [
    { id: 1, nome: 'JOSE ', idade: '20' },
    { id: 2, nome: 'JOAO ', idade: '30' },
    { id: 3, nome: 'PEDRO', idade: '40' },
    { id: 4, nome: 'MANOEL', idade: '35' },
    { id: 5, nome: 'JORGE', idade: '45' }
]
let IdMax = db.length;

// Buscar dados
routes.get('/', (req, res) => {
    return res.status(200).json(db)
})

// Inserir dados
routes.post('/', (req, res) => {
    const { nome, idade } = req.body;
    if (Object.keys(req.body).length == 0) {
        return res.status(400).json({ message: 'Invalid Properties' })
    } else {
        var objectToAddArray = {
            id: ++IdMax,
            nome,
            idade
        }
    }
    db.push(objectToAddArray)
    return res.status(201).json(db);
})

// Deletar dados
routes.delete('/:id', (req, res) => {
    const id = req.params['id'];
    let newDb = db.filter(item => {
        if (item.id != id)
            return item
    })
    db = newDb
    return res.status(202).json(db)
})

module.exports = routes