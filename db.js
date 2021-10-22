async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: ''
    });
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function selectProjetos(){
    const conn = await connect(); 
    const sql = 'SELECT p.id, p.numero_ano_registro, p.projeto, p.numero_funpec, p.titulo_projeto, a.ambito, p.parceiro, tf.financiamento, cp.classificacao, tcr.tipo_captacao, DATE_FORMAT(p.data_inicio, "%d/%m/%Y") AS "data_inicio", DATE_FORMAT(p.data_fim, "%d/%m/%Y") AS "data_fim", s.status, p.valor, p.unidade_interessada, p.nome_coordenador, p.unidade_academica_coordenador, p.docentes, p.bolsista_graduacao, p.bolsista_especialista, p.bolsista_mestrado, p.bolsista_doutorado, p.especialista_convidado, p.clt, p.tecnico_ufrn FROM projetos p ' +
    'JOIN ambito a ON p.ambito_id = a.id ' +
    'JOIN tipo_financiamento tf ON p.tipo_financiamento_id = tf.id ' +
    'JOIN classificacao_projeto cp ON p.classificacao_projeto_id = cp.id ' +
    'JOIN tipo_captacao_recurso tcr ON p.tipo_captacao_recurso_id = tcr.id ' +
    'JOIN status s ON p.status_id = s.id;';
    
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
    const sql = 'UPDATE projetos SET numero_ano_registro=?, projeto=?, numero_funpec=?, titulo_projeto=?, ambito_id=?, parceiro=?, tipo_financiamento_id=?, classificacao_projeto_id=?, tipo_captacao_recurso_id=?, data_inicio=?, data_fim=?, status_id=?, valor=?, unidade_interessada=?, nome_coordenador=?, unidade_academica_coordenador=?, docentes=?, bolsista_graduacao=?, bolsista_especialista=?, bolsista_mestrado=?, bolsista_doutorado=?, especialista_convidado=?, clt=?, tecnico_ufrn=? WHERE id=?';
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
        projeto['quantidadeTecnico'],
        id
    ];
    return await conn.query(sql, values);
}

async function deleteProjeto(id) {
    const conn = await connect();
    const sql = 'DELETE FROM projetos WHERE id = ?';
    const [affectedRows] = await conn.query(sql, id);
    return affectedRows;
}

module.exports = {connect, selectProjetos, insertProjeto, updateProjeto, deleteProjeto}
