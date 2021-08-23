select * from ambito;

select * from tipo_financiamento;

select* from classificacao_projeto;

select * from tipo_captacao_recurso;

select * from status;

select * from tipo_aditivo;

SELECT * FROM projetos p 
JOIN ambito a ON p.ambito_id = a.id 
JOIN tipo_financiamento tf ON p.tipo_financiamento_id = tf.id 
JOIN classificacao_projeto cp ON p.classificacao_projeto_id = cp.id 
JOIN tipo_captacao_recurso tcr ON p.tipo_captacao_recurso_id = tcr.id 
JOIN status s ON p.status_id = s.id;
        
SELECT p.id, p.numero_ano_registro, p.projeto, p.numero_funpec, p.titulo_projeto, a.ambito, p.parceiro, tf.financiamento, cp.classificacao, tcr.tipo_captacao, p.data_inicio, p.data_fim, s.status, p.valor, p.unidade_interessada, p.nome_coordenador, p.unidade_academica_coordenador, p.docentes, p.bolsista_graduacao, p.bolsista_especialista, p.bolsista_mestrado, p.bolsista_doutorado, p.especialista_convidado, p.clt, p.tecnico_ufrn FROM projetos p 
JOIN ambito a ON p.ambito_id = a.id 
JOIN tipo_financiamento tf ON p.tipo_financiamento_id = tf.id 
JOIN classificacao_projeto cp ON p.classificacao_projeto_id = cp.id 
JOIN tipo_captacao_recurso tcr ON p.tipo_captacao_recurso_id = tcr.id 
JOIN status s ON p.status_id = s.id;

update projetos set valor = 'R$ 11.597.852,02' where numero_ano_registro = '292/2016'