const express = require('express')
const cors = require('cors')

const db = require('./db');
const validar = require('./validation');

const app = express();

const port = process.env.PORT || 80;

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json())

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/script.js', async (req, res) => {
    res.sendFile(__dirname + '/public/script.js');
})

app.get('/style.css', async (req, res) => {
    res.sendFile(__dirname + '/public/style.css');
})

//Retorna todos os projetos
app.get('/projetos', async (req, res) => {
    console.log('Buscando projetos ...')
    const projetos = await db.selectProjetos()

    return res.json(projetos)      
})

//Cria um projeto
app.post('/projetos', async (req, res) => {
    const projeto = req.body

    console.log('Adicionando novo projeto ...')
        
    const erros = validar.validaProjeto(projeto)

    if (erros.length == 0){
        console.log('Projeto Válido');

        await db.insertProjeto(projeto)

        return res.json(true)
    }else {
        console.log('Projeto inválido');
        console.log(erros)

        return res.json(erros)
    }
})

// Atualizar um projeto
app.put('/projetos&id=:index', async (req, res) => {
    const id = req.params['index']
    console.log('Atualizando projeto ' + id + ' ...')

    const projeto = req.body

    const erros = validar.validaProjeto(projeto)

    if (erros.length == 0){
        console.log('Projeto Válido');

        await db.updateProjeto(id, projeto)

        return res.json(true)
    }else {
        console.log('Projeto inválido');

        return res.json(erros)
    }
})

// Deletar um projeto
app.delete('/projetos&id=:index', async (req, res) => {
    const id = req.params['index']
    console.log('Deletando projeto ' + id + ' ...');

    const result = await db.deleteProjeto(id)

    if(result['affectedRows'] == 1){
        return res.json(true)
    } else {
        return res.json(false)
    }
})

app.listen(porta)
console.log('Servidor rodando na porta ' + port )