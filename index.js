const express = require('express')
const cors = require('cors')

const db = require('./db')

const server = express()

// server.use("/static", express.static("public"))

server.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});

server.use(express.json())

server.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

server.get('/script.js', async (req, res) => {
    res.sendFile(__dirname + '/public/script.js');
})

//Retorna todos os projetos
server.get('/projetos', async (req, res) => {
    console.log('Buscando projetos ...')
    const projetos = await db.selectProjetos()

    return res.json(projetos)      
})

//Cria um projeto
server.post('/projetos', async (req, res) => {
    const projeto = req.body

    console.log('Adicionando novo projeto ...')
    const result = await db.insertProjeto(projeto)
    console.log(result)

    const projetos = await db.selectProjetos()
    
    return res.json(projetos)
})

// Atualizar um projeto
server.put('/projetos&id=:index', async (req, res) => {
    const id = req.params['index']
    console.log('Atualizando projeto ' + id + ' ...')

    const projeto = req.body

    const result = await db.updateProjeto(id, projeto)
    console.log(result)

    const projetos = await db.selectProjetos()
    
    return res.json(projetos)
})

// Deletar um projeto
server.delete('/projetos&id=:index', async (req, res) => {
    const id = req.params['index']
    console.log('Deletando projeto ' + id + ' ...');

    const result = await db.deleteProjeto(id)
    console.log(result)
    
    const projetos = await db.selectProjetos()
    
    return res.json(projetos)
})

server.listen(3000)
console.log('Servidor rodando na porta 3000...')