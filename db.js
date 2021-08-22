async function connect(){
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:rootmysql@localhost:3306/projetos");
    console.log("Conexão estabelecida");
    globalThis.connection = connection;

    return connection;
}

async function selectProjetos(){
    const conn = await connect(); 
    const sql = 'SELECT p.id, p.numero_ano_registro, p.projeto, p.numero_funpec, p.titulo_projeto, a.ambito, p.parceiro, tf.financiamento, cp.classificacao, tcr.tipo_captacao, p.data_inicio, p.data_fim, s.status, p.valor, p.unidade_interessada, p.nome_coordenador, p.unidade_academica_coordenador, p.docentes, p.bolsista_graduacao, p.bolsista_especialista, p.bolsista_mestrado, p.bolsista_doutorado, p.especialista_convidado, p.clt, p.tecnico_ufrn FROM projetos p ' +
    'JOIN ambito a ON p.ambito_id = a.id ' +
    'JOIN tipo_financiamento tf ON p.tipo_financiamento_id = tf.id ' +
    'JOIN classificacao_projeto cp ON p.classificacao_projeto_id = cp.id ' +
    'JOIN tipo_captacao_recurso tcr ON p.tipo_captacao_recurso_id = tcr.id ' +
    'JOIN status s ON p.status_id = s.id;'
    const [rows] = await conn.query(sql);
    return rows;
}

async function insertProjeto(projeto){
    const conn = await connect();
    const sql = 'INSERT INTO projetos(numero_ano_registro, projeto, numero_funpec, titulo_projeto, ambito_id, parceiro, tipo_financiamento_id, classificacao_projeto_id, tipo_captacao_recurso_id, data_inicio, data_fim, status_id, valor, unidade_interessada, nome_coordenador, unidade_academica_coordenador, docentes, bolsista_graduacao, bolsista_especialista, bolsista_mestrado, bolsista_doutorado, especialista_convidado, clt, tecnico_ufrn) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    const values = [
        projeto['anoregistro'], 
        projeto['projeto'], 
        projeto['numeroFunpec'], 
        projeto['tituloProjeto'], 
        projeto['ambito'], 
        projeto['parceiro'], 
        projeto['tipoFinanciamento'], 
        projeto['classificacaoProjeto'], 
        projeto['tipoCaptacao'], 
        projeto['dataInicio'], 
        projeto['dataFim'], 
        projeto['status'], 
        projeto['valor'], 
        projeto['unidade'], 
        projeto['nomeCoordenador'], 
        projeto['unidadeAcademicaCoordenador'], 
        projeto['quantidadeDocentes'], 
        projeto['quantidadeGraduacao'], 
        projeto['quantidadeEspecializacao'], 
        projeto['quantidadeMestrado'], 
        projeto['quantidadeDoutorado'], 
        projeto['quantidadeConvidado'], 
        projeto['quantidadeCLT'], 
        projeto['quantidadeTecnico']
    ];
    return await conn.query(sql, values);
}

async function updateProjeto(id, projeto){
    const conn = await connect();
    const sql = 'UPDATE projetos SET projeto=?, numero_funpec=?, titulo_projeto=?, ambito_id=?, parceiro=?, tipo_financiamento_id=?, classificacao_projeto_id=?, tipo_captacao_recurso_id=?, data_inicio=?, data_fim=?, status_id=?, valor=?, unidade_interessada=?, nome_coordenador=?, unidade_academica_coordenador=?, docentes=?, bolsista_graduacao=?, bolsista_especialista=?, bolsista_mestrado=?, bolsista_doutorado=?, especialista_convidado=?, clt=?, tecnico_ufrn=? WHERE id=?';
    const values = [
        projeto['projeto'], 
        projeto['numeroFunpec'], 
        projeto['tituloProjeto'], 
        projeto['ambito'], 
        projeto['parceiro'], 
        projeto['tipoFinanciamento'], 
        projeto['classificacaoProjeto'], 
        projeto['tipoCaptacao'], 
        projeto['dataInicio'], 
        projeto['dataFim'], 
        projeto['status'], 
        projeto['valor'], 
        projeto['unidade'], 
        projeto['nomeCoordenador'], 
        projeto['unidadeAcademicaCoordenador'], 
        projeto['quantidadeDocentes'], 
        projeto['quantidadeGraduacao'], 
        projeto['quantidadeEspecializacao'], 
        projeto['quantidadeMestrado'], 
        projeto['quantidadeDoutorado'], 
        projeto['quantidadeConvidado'], 
        projeto['quantidadeCLT'], 
        projeto['quantidadeTecnico'],
        id
    ];
    return await conn.query(sql, values);
}

async function deleteProjeto(id) {
    const conn = await connect();
    const sql = 'DELETE FROM projetos WHERE id = ?'
    return await conn.query(sql, id);
}

module.exports = {selectProjetos, connect, insertProjeto, updateProjeto, deleteProjeto}