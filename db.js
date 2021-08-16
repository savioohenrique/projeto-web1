
// const mysql = require('mysql2/promise')

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "rootmysql",
//     port: 3306
//   });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
 
async function connect(){
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:rootmysql@localhost:3306/projetos");
    console.log("Conexão realizada");
    globalThis.connection = connection;

    return connection;
}

async function selectProjetos(){
    const conn = await connect(); 
    const sql = 'SELECT p.numero_ano_registro, p.projeto, p.numero_funpec, p.titulo_projeto, a.ambito, p.parceiro, tf.financiamento, cp.classificacao, tcr.tipo_captacao, p.data_inicio, p.data_fim, s.status, p.valor, p.unidade_interessada, p.nome_coordenador, p.unidade_academica_coordenador, p.docentes, p.bolsista_graduacao, p.bolsista_especialista, p.bolsista_mestrado, p.bolsista_doutorado, p.especialista_convidado, p.clt, p.tecnico_ufrn FROM projetos p ' +
    'JOIN ambito a ON p.ambito_id = a.id ' +
    'JOIN tipo_financiamento tf ON p.tipo_financiamento_id = tf.id ' +
    'JOIN classificacao_projeto cp ON p.classificacao_projeto_id = cp.id ' +
    'JOIN tipo_captacao_recurso tcr ON p.tipo_captacao_recurso_id = tcr.id ' +
    'JOIN status s ON p.status_id = s.id;'
    const [rows] = await conn.query(sql);
    return rows;
}

// console.log(selectProjetos())

module.exports = {selectProjetos}