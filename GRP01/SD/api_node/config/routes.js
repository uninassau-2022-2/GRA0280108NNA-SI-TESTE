const express = require('express')
const routes = express.Router()


let db = [
    {'1':{nome:'JOSE ', idade: '20'}},
    {'2':{nome:'JOAO ', idade: '30'}},
    {'3':{nome:'PEDRO', idade: '40'}},
    {'4':{nome:'MANOEL', idade: '35'}},
    {'5':{nome:'JORGE', idade: '45'}}
]


// Buscar dados
routes.get('/', (req, res) => {
    return res.json(db)


    
})


// Inserir dados

routes.post('/:add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})


// Deletar dados

routes.delete('/:id', (req, res) => {
    const id = req.params.id
    let newDb = db.filter( item => {

        if(!item[id])
            return item
        
        })

        db = newDb
        return res.send(newDb)
})



module.exports = routes