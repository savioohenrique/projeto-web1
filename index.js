const express = require('express')

const server = express()

const db = require('./db')

server.use(express.json())

//Retorna todos os projetos
server.get('/projetos', async (req, res) => {
    console.log('Buscando projetos...')
    const projetos = await db.selectProjetos()
    console.log(projetos)
    res.setHeader('Access-Control-Allow-Origin', '*')
    return res.json(projetos)      
})

//Cria um projeto
server.post('/projetos', async (req, res) => {
    console.log('Adicionando projeto...');

    const [projeto] = JSON.parse(req.body)

    console.log(projeto)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST')

    // console.log('SELECT * FROM CLIENTES');
    const projetos = await db.selectProjetos();
    // console.log(projetos);

    // console.log('INSERT INTO projetos');
    // const result = await db.insertCustomer(projeto);
    // console.log(result);

    // console.log('SELECT * FROM CLIENTES');
    // const clientes = await db.selectCustomers();
    // console.log(clientes);

    // return res.json(projetos)
})

// Atualizar um projeto
server.put('/projetos/:index', async (req, res) => {
    
})

// Deletar um projeto
server.delete('/projetos/:index', async (req, res) => {
    
})

server.listen(3000)