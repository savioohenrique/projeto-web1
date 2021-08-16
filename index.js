const express = require('express')

const server = express()

server.use(express.json())

const cursos = ['fullstack master', 'Web 1', 'Projetos']

//Retorna um curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params

    return res.json(cursos[index])
})

//Retorna todos os cursos
server.get('/projetos', async (req, res) => {
    // return res.json(cursos)
    (async () => {
        console.log('Buscando projetos...')
        const db = require('./db')
        const projetos = await db.selectProjetos()
        console.log(projetos)
        res.setHeader('Access-Control-Allow-Origin', '*')
        return res.json(projetos)      
    })();
})

//Cria um curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name)
    
    return res.json(cursos)
})

// Atualizar um curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    cursos[index] = name;

    return res.json(cursos)
})

// Deletar um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params

    cursos.slice(index, 1)
    return res.json({ message : "O curso foi deletado"})
})

server.listen(3000)