insert into ambito (ambito) values ('Municipal');
insert into ambito (ambito) values ('Estadual');
insert into ambito (ambito) values ('Nacional');
insert into ambito (ambito) values ('Internacional');

insert into tipo_financiamento (financiamento) values ('Privado');
insert into tipo_financiamento (financiamento) values ('Público - Municipal');
insert into tipo_financiamento (financiamento) values ('Público - Estadual');
insert into tipo_financiamento (financiamento) values ('Público - Federal');

insert into classificacao_projeto (classificacao) values ('Acordos, termos e contratos');
insert into classificacao_projeto (classificacao) values ('Ensino - Especialização (Residência)');
insert into classificacao_projeto (classificacao) values ('Ensino - Mestrado Profissional');
insert into classificacao_projeto (classificacao) values ('Evento');
insert into classificacao_projeto (classificacao) values ('PD&I');
insert into classificacao_projeto (classificacao) values ('PD&I - Lei da Informática');

insert into tipo_captacao_recurso (tipo_captacao) values ('A');
insert into tipo_captacao_recurso (tipo_captacao) values ('B');
insert into tipo_captacao_recurso (tipo_captacao) values ('C');
insert into tipo_captacao_recurso (tipo_captacao) values ('D');

insert into status (status) values ('Ativo');
insert into status (status) values ('Cancelado');
insert into status (status) values ('Registrado');
insert into status (status) values ('Vencido');

insert into tipo_aditivo (nome_aditivo) values ('Nenhum');
insert into tipo_aditivo (nome_aditivo) values ('Modificação de metas ou outros');
insert into tipo_aditivo (nome_aditivo) values ('Prazo');
insert into tipo_aditivo (nome_aditivo) values ('Prazo e Valor');
insert into tipo_aditivo (nome_aditivo) values ('Valor');

insert into projetos (numero_ano_registro, projeto, numero_funpec, titulo_projeto, ambito_id, parceiro, tipo_financiamento_id, classificacao_projeto_id, tipo_captacao_recurso_id, data_inicio, data_fim, status_id, valor, unidade_interessada, nome_coordenador, unidade_academica_coordenador, docentes, bolsista_graduacao, bolsista_especialista, bolsista_mestrado, bolsista_doutorado, especialista_convidado, clt, tecnico_ufrn) 
values ('292/2016', '5392.11.1116', '762016', 'TERMO DE COOPERAÇÃO ENTRE A PREFEITURA E A UFRN PARA DESENVOLVER E IMPLANTAR APLICAÇÕES COMPUTACIONAIS NA REGIÃO METROPOLITANA DE NATAL', 3, 'MUNICÍPIO DE NATAL - SECRETARIA MUNICIPAL DE PLANEJAMENTO', 4, 1, 2, '2016-11-03', '2021-11-02', 1, 'R$ 11.597.852,02', 'INSTITUTO METROPOLE DIGITAL', 'APUENA VIEIRA GOMES', 'INSTITUTO METROPOLE DIGITAL', 51, 0, 0, 0, 0, 0, 0, 27);
insert into projetos (numero_ano_registro, projeto, numero_funpec, titulo_projeto, ambito_id, parceiro, tipo_financiamento_id, classificacao_projeto_id, tipo_captacao_recurso_id, data_inicio, data_fim, status_id, valor, unidade_interessada, nome_coordenador, unidade_academica_coordenador, docentes, bolsista_graduacao, bolsista_especialista, bolsista_mestrado, bolsista_doutorado, especialista_convidado, clt, tecnico_ufrn) 
values ('425/2020', '8370.11.1220', '582020', 'Desenvolvimento de Central de Segurança Eletrônica Think - CEST', 3, 'THINK TECHNOLOGY INDUSTRIA E COMERCIO DE PRODUTOS DE TELECOMUNICACOES LTDA', 1, 5, 4, '2020-11-26', '2021-08-25', 1, 'R$ 310.412,82', 'INSTITUTO METROPOLE DIGITAL', 'EDUARDO NOGUEIRA CUNHA', 'INSTITUTO METROPOLE DIGITAL', 2, 0, 0, 0, 0, 0, 0, 0);



