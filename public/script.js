
// Botoes Editar e Excluir da tabela
const btnGroupStr = '<div class="btn-group"><a class="btn btn-primary btnEdtitar btn-sm" data-bs-toggle="modal" data-bs-target="#modalInserirEditar" href=#/>' + 'Editar' + '</a>'
+ '<a class="btn btn-danger btn-sm btnExcluir" data-bs-toggle="modal" data-bs-target="#modalExcluir" href=#/>' + 'Excluir' + '</a>' + "</div>";

function formataDataModal(data){
    let dataArray = data.split('/');
    let dataFormatada = (dataArray[2] + "-" + dataArray[1] + "-" + dataArray[0]) ; 

    return dataFormatada;
}


function atualizarSelect(select, text){
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text === text) {
        select.selectedIndex = i;
        break;
    }
  }
}

// Requisita os projetos e manda atualizar a tabela
let listarProjetos = async function () {
  let projetos = await buscarProjetos();
  atualizarTabela(projetos);
}

// Realiza a requisição ao banco e retorna os projetos cadastrados
async function buscarProjetos() {
  let url = 'https://gerenciador-projetos-imd.herokuapp.com/';
  try {
      let response = await fetch(url, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
          },
      });
      let msg = await response.json();
      return msg;
  } catch (error) {
      console.log(error)
  }
};

// Atualiza a tabela de projetos de acordo com um array de projetos
function atualizarTabela(projetos){
  let datatable = $('#table').DataTable();
  datatable.clear();
  datatable.rows.add(projetos);
  datatable.draw();
}

function limparMensagensDeErro(){
    document.getElementById('listaMensagensErro').innerHTML = '';
}   

function validaProjeto(projeto){
    let error = [];

    if (projeto['anoregistro'] == ''){
        error.push('Numero/Ano Registro deve ser informado');
    }
    if (projeto['projeto'] == ''){
        error.push('o campo projeto deve ser informado');
    }
    if (projeto['tituloProjeto'] == ''){
        error.push('O titulo do projeto deve ser informado');
    }
    if (projeto['ambito'] == '' || projeto['ambito'] == 0){
        error.push('O ambito deve ser informado');
    }
    if (projeto['parceiro'] == ''){
        error.push('O parceiro deve ser informado');
    }
    if (projeto['tipoFinanciamento'] == '' || projeto['tipoFinanciamento'] == 0){
        error.push('O tipo de financiamento deve ser informado');
    }
    if (projeto['classificacaoProjeto'] == '' || projeto['classificacaoProjeto'] == 0){
        error.push('A classificação do projeto deve ser informada');
    }
    if (projeto['tipoCaptacao'] == '' || projeto['tipoCaptacao'] == 0){
        error.push('O tipo de captação do recurso deve ser informado');
    }
    if (projeto['status'] == '' || projeto['status'] == 0){
        error.push('O status deve ser informado');
    }
    if (projeto['unidade'] == ''){
        error.push('A unidade interessada deve ser informada');
    }
    if (projeto['numeroFunpec'] == ''){
        error.push('O número Funpec deve ser informado');
    }
    if (projeto['dataInicio'] == ''){
        error.push('A data de início deve ser informada');
    }
    if (projeto['dataFim'] == ''){
        error.push('A data fim deve ser informada');
    }
    if (projeto['valor'] == ''){
        error.push('O valor deve ser informado');
    }
    if (projeto['nomeCoordenador'] == ''){
        error.push('Nome Coordenador(a) deve ser informado');
    }
    if (projeto['unidadeAcademicaCoordenador'] == ''){
        error.push('A unidade acadêmica do(a) coordenador(a) deve ser informada');
    }
    if (projeto['quantidadeDocentes'] == ''){
        error.push('A quantidade de docentes deve ser informada');
    }
    if (projeto['quantidadeGraduacao'] == ''){
        error.push('A quantidade de bolsistas de graduação deve ser informada');
    }
    if (projeto['quantidadeEspecializacao'] == ''){
        error.push('A quantidade de quantidade de bolsistas especialistas deve ser informada');
    }
    if (projeto['quantidadeMestrado'] == ''){
        error.push('A quantidade de quantidade de mestrado deve ser informada');
    }
    if (projeto['quantidadeDoutorado'] == ''){
        error.push('A quantidade de bolsistas de doutorado deve ser informada');
    }
    if (projeto['quantidadeConvidado'] == ''){
        error.push('A quantidade de especialistas convidados deve ser informada');
    }
    if (projeto['quantidadeCLT'] == ''){
        error.push('A quantidade de profissionais CLT deve ser informada');
    }
    if (projeto['quantidadeTecnico'] == ''){
        error.push('A quantidade de técnicos da UFRN deve ser informada');
    }
    
    if ((Date.parse(projeto['dataFim']) - Date.parse(projeto['dataInicio'])) < 0 ){
        error.push('A data de início não pode ser maior do que a data fim do projeto.');
    }

    if (error.length != 0){
        console.log('Projeto possui erros');
        
        let listaMensgens = document.getElementById('listaMensagensErro');
        let listItem = '';
        let mensagem = '';

        error.forEach(element => {
            listItem = document.createElement('li');
            mensagem  = document.createTextNode(element);
            listItem.appendChild(mensagem);

            listaMensgens.appendChild(listItem);
        });

        return false;
    } else {
        return true;
    }
}

function exibirMensagensDeErro(mensagens){
    let listaMensgens = document.getElementById('listaMensagensErro');
    let listItem = '';
    let mensagem = '';
 
    for (let index = 0; index < mensagens.length; index++) {
        const element = mensagens[index].texto;
        listItem = document.createElement('li');
        mensagem  = document.createTextNode(element);
        listItem.appendChild(mensagem);  
        
        listaMensgens.appendChild(listItem);
    }
}


async function adicionarProjetoDB() {
    console.log("Cadastrando novo projeto...");
    
    let projeto = projetoArray();

    if (validaProjeto(projeto)){
        const resultado = await postProjeto('https://gerenciador-projetos-imd.herokuapp.com/projetos', projeto);

        if (resultado == true){
            alert("Projeto cadastrado com sucesso.");
            listarProjetos();
        } else {           
            const mensagens = JSON.parse(JSON.stringify(resultado));
            alert("Não foi possível inserir o projeto no banco de dados.");
            return mensagens;
        }
    } else {
        console.log('Erro ao inserir projeto...');
    }

};

async function atualizaProjetoDB() {
    let projetoId = document.getElementById("idProjeto").value;
    console.log("Atualizando projeto " + projetoId + "...");

    let url = 'https://gerenciador-projetos-imd.herokuapp.com/projetos&id=' + projetoId;
    
    let projeto = projetoArray();

    if (validaProjeto(projeto)){
        const resultado = await updateProjeto(url, projeto);
        if (resultado == true){
            listarProjetos();
            return true;
        } else {
            const mensagens = JSON.parse(JSON.stringify(resultado));
            alert("Não foi possível atualizar o projeto no banco de dados.");
            return mensagens;
        }
    } else {
        console.log('Erro ao atualizar projeto...');
    }
};

async function deletarProjetoDB() {
    let projetoId = document.getElementById("idProjeto").value;
    console.log("Deletando projeto " + projetoId + "...");

    let url = 'https://gerenciador-projetos-imd.herokuapp.com/projetos&id=' + projetoId;

    const resultado = await deleteProjeto(url);

    if(resultado){
        alert( "Projeto excluído com sucesso!");
        listarProjetos();
    } else {
        alert("Não foi possível excluir o projeto.");
    }
};


function projetoArray(){
  let projeto = {
    "anoregistro" : document.getElementById("anoRegistro").value , 
    "projeto" : document.getElementById("projeto").value , 
    "numeroFunpec" : document.getElementById("numeroFunpec").value,
    "tituloProjeto" : document.getElementById("tituloProjeto").value,
    "ambito" : document.getElementById("ambito").value, 
    "parceiro" : document.getElementById("parceiro").value, 
    "tipoFinanciamento" : document.getElementById("tipoFinanciamento").value, 
    "classificacaoProjeto" : document.getElementById("classificacaoProjeto").value, 
    "tipoCaptacao" : document.getElementById("tipoCaptacao").value, 
    "dataInicio" : document.getElementById("dataInicio").value, 
    "dataFim" : document.getElementById("dataFim").value, 
    "status" : document.getElementById("status").value, 
    "valor" : document.getElementById("valor").value, 
    "unidade" : document.getElementById("unidade").value, 
    "nomeCoordenador" : document.getElementById("nomeCoordenador").value, 
    "unidadeAcademicaCoordenador" : document.getElementById("unidadeAcademicaCoordenador").value, 
    "quantidadeDocentes" : document.getElementById("quantidadeDocentes").value, 
    "quantidadeGraduacao" : document.getElementById("quantidadeGraduacao").value, 
    "quantidadeEspecializacao" : document.getElementById("quantidadeEspecializacao").value, 
    "quantidadeMestrado" : document.getElementById("quantidadeMestrado").value, 
    "quantidadeDoutorado" : document.getElementById("quantidadeDoutorado").value, 
    "quantidadeConvidado" : document.getElementById("quantidadeConvidado").value, 
    "quantidadeCLT" : document.getElementById("quantidadeCLT").value, 
    "quantidadeTecnico" : document.getElementById("quantidadeTecnico").value, 
  };

  return projeto;
}


async function postProjeto(url, projeto){
  try {
      let response = await fetch(url, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Request-Method': 'POST'                
          },
          body: JSON.stringify(projeto)
      });
      let msg = await response.json();

      return msg;
  } catch (error) {
      console.log(error)
  }
}

async function updateProjeto(url, projeto){
  try {
      let response = await fetch(url, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Request-Method': 'PUT'                
          },
          body: JSON.stringify(projeto)
      });
      let msg = await response.json();

      return msg;
  } catch (error) {
      console.log(error)
  }
}

async function deleteProjeto(url){
  try {
      let response = await fetch(url, {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Access-Control-Request-Method': 'DELETE'                
          },
      });
      let msg = await response.json();
      
      return msg;
  } catch (error) {
      console.log(error)
  }
}


$(document).ready(function() {
    let tabela = $('#table').DataTable({
        data: [],
        scrollY: "400px",
        scrollX: true,
        scrollCollapse: true,
        bLengthChange: true,
        info: false,
        language: {
            "search": " ",
            "searchPlaceholder": "Buscar",
            // "info": "Exibindo de _START_ até _END_ - Total de _TOTAL_ projetos",
            "paginate": {
                "first":      "Primeiro",
                "last":       "Último",
                "next":       "Próximo",
                "previous":   "Anterior"
            },
            "emptyTable": "Está tabela não possui nenhum dado",
        },
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'colvis', // opcao de botao para escolher a visibilidade das colunas
                text: 'Ativar/desativar colunas',
                className: 'btn btn-secondary',
            }
        ],
        fnDrawCallback: function () {
            $('.buttons-colvis').removeClass('dt-button');
        },
        bLengthChange: true,
        "columnDefs": [ {
            "targets": 0,
            "defaultContent": btnGroupStr,
        }],
        "columns": [
            { data: "", /*width: "50px"*/ }, // espaco necessario para a coluna dos botoes
            { data: "id", /*width: "50px"*/ }, // espaco necessario para a coluna id
            { data: "numero_ano_registro" },
            { data: "projeto" },
            { data: "numero_funpec" },
            { data: "titulo_projeto" },
            { data: "ambito" },
            { data: "parceiro" },
            { data: "financiamento" },
            { data: "classificacao" },
            { data: "tipo_captacao" },
            { data: "data_inicio" },
            { data: "data_fim" },
            { data: "status" },
            { data: "valor" },
            { data: "unidade_interessada" },
            { data: "nome_coordenador" },
            { data: "unidade_academica_coordenador" },
            { data: "docentes" },
            { data: "bolsista_graduacao" },
            { data: "bolsista_especialista" },
            { data: "bolsista_mestrado" },
            { data: "bolsista_doutorado" },
            { data: "especialista_convidado" },
            { data: "clt" },
            { data: "tecnico_ufrn" },
        ],
    });

    tabela.column(1).visible(false); // tirar visualizacao da coluna do id

    //Carrega os dados na tabela
    listarProjetos();

    // botao btnInserirProjeto
    $('div.container').on( 'click', '#btnInserirProjeto', function () {
      // troca a classe do botao para o modo de inserir projeto
      $('#btnConfirmarForm').addClass('btnConfirmarInserir').removeClass('btnConfirmarEditar');
      
      limparMensagensDeErro();
    });

    $('#modalInserirEditar').on('hidden.bs.modal', function (e) {
        document.getElementById("idProjeto").value = '';
        document.getElementById("anoRegistro").value = '';
        document.getElementById("projeto").value = '';
        document.getElementById("numeroFunpec").value = '';
        document.getElementById("tituloProjeto").value = '';
        document.getElementById("ambito").value = '';
        document.getElementById("parceiro").value = '';
        document.getElementById("tipoFinanciamento").value = '';
        document.getElementById("classificacaoProjeto").value = '';
        document.getElementById("tipoCaptacao").value = '';
        document.getElementById("dataInicio").value = '';
        document.getElementById("dataFim").value = '';
        document.getElementById("status").value = '';
        document.getElementById("valor").value = '';
        document.getElementById("unidade").value = '';
        document.getElementById("nomeCoordenador").value = '';
        document.getElementById("unidadeAcademicaCoordenador").value = '';
        document.getElementById("quantidadeDocentes").value = '';
        document.getElementById("quantidadeGraduacao").value = '';
        document.getElementById("quantidadeEspecializacao").value = '';
        document.getElementById("quantidadeMestrado").value = '';
        document.getElementById("quantidadeDoutorado").value = '';
        document.getElementById("quantidadeConvidado").value = '';
        document.getElementById("quantidadeCLT").value = '';
        document.getElementById("quantidadeTecnico").value = '';
      })

    // botao editar da tabela
    $('#table tbody').on( 'click', '.btnEdtitar', function () {
        const data = tabela.row( $(this).parents('tr') ).data(); // recupera um objeto que representa a row na qual o botao foi clicado

        limparMensagensDeErro();

        let idProjeto = document.getElementById("idProjeto");
        idProjeto.value = data['id'];
        let anoRegistro = document.getElementById("anoRegistro");
        anoRegistro.value = data['numero_ano_registro'];
        let numeroProjeto = document.getElementById("projeto");
        numeroProjeto.value = data['projeto'];
        let numeroFunpec = document.getElementById("numeroFunpec");
        numeroFunpec.value = data['numero_funpec'];
        let tituloProjeto = document.getElementById("tituloProjeto");
        tituloProjeto.value = data['titulo_projeto'];
        let ambito = document.getElementById("ambito");
        atualizarSelect(ambito, data['ambito'])

        let parceiro = document.getElementById("parceiro");
        parceiro.value = data['parceiro'];
        let tipoFinanciamento = document.getElementById("tipoFinanciamento");
        atualizarSelect(tipoFinanciamento, data['financiamento']);

        let classificacaoProjeto = document.getElementById("classificacaoProjeto");
        atualizarSelect(classificacaoProjeto, data['classificacao']);

        let tipoCaptacao = document.getElementById("tipoCaptacao");
        atualizarSelect(tipoCaptacao, data['tipo_captacao']);

        let dataInicio = document.getElementById("dataInicio");
        let dataInicioFormatada = formataDataModal(data['data_inicio']); 
        dataInicio.value = dataInicioFormatada;

        let dataFim = document.getElementById("dataFim");
        let dataFimFormatada = formataDataModal(data['data_fim']) ; 
        dataFim.value = dataFimFormatada;

        let status = document.getElementById("status");
        atualizarSelect(status, data['status']);

        let valor = document.getElementById("valor");
        valor.value = data['valor'];
        let unidade = document.getElementById("unidade");
        unidade.value = data['unidade_interessada'];
        let nomeCoordenador = document.getElementById("nomeCoordenador");
        nomeCoordenador.value = data['nome_coordenador'];
        let unidadeAcademicaCoordenador = document.getElementById("unidadeAcademicaCoordenador");
        unidadeAcademicaCoordenador.value = data['unidade_academica_coordenador'];
        let quantidadeDocentes = document.getElementById("quantidadeDocentes");
        quantidadeDocentes.value = data['docentes'];
        let quantidadeGraduacao = document.getElementById("quantidadeGraduacao");
        quantidadeGraduacao.value = data['bolsista_graduacao'];
        let quantidadeEspecializacao = document.getElementById("quantidadeEspecializacao");
        quantidadeEspecializacao.value = data['bolsista_especialista'];
        let quantidadeMestrado = document.getElementById("quantidadeMestrado");
        quantidadeMestrado.value = data['bolsista_mestrado'];
        let quantidadeDoutorado = document.getElementById("quantidadeDoutorado");
        quantidadeDoutorado.value = data['bolsista_doutorado'];
        let quantidadeConvidado = document.getElementById("quantidadeConvidado");
        quantidadeConvidado.value = data['especialista_convidado'];
        let quantidadeCLT = document.getElementById("quantidadeCLT");
        quantidadeCLT.value = data['clt'];
        let quantidadeTecnico = document.getElementById("quantidadeTecnico");
        quantidadeTecnico.value = data['tecnico_ufrn'];
      
        // troca a classe do botao para o modo de editar projeto
        $('#btnConfirmarForm').addClass('btnConfirmarEditar').removeClass('btnConfirmarInserir');
    });

    // botao excluir da tabela
    $(document).on( 'click', '.btnExcluir', function () {
        const data = tabela.row( $(this).parents('tr') ).data(); // recupera um objeto que representa a row na qual o botao foi clicado
        const dataValues = Object.values(data);
        let idProjeto = document.getElementById("idProjeto");
        idProjeto.value = dataValues[0];
    });

    // botao confirmar do modalInserirEditar
    $('div.container').on( 'click', '#btnConfirmarForm', async function () {
        const data = tabela.row( $(this).parents('tr') ).data(); // recupera um objeto que representa a row na qual o botao foi clicado
        const modal = document.getElementById('modalInserirEditar');

        limparMensagensDeErro();

        console.log('validando projeto ...');
        let projeto = projetoArray();

        if (validaProjeto(projeto)){
            if( $('#btnConfirmarForm').hasClass("btnConfirmarInserir") ) {
                const resultado = await adicionarProjetoDB();

                if(resultado == true){
                    $('#modalInserirEditar').modal('hide');
                } else {
                    limparMensagensDeErro();
                    exibirMensagensDeErro(resultado);
                }
              }
              
            if($('#btnConfirmarForm').hasClass("btnConfirmarEditar")) {
                const resultado = await atualizaProjetoDB();
                if(resultado == true){
                    $('#modalInserirEditar').modal('hide');
                } else {
                    limparMensagensDeErro();
                    exibirMensagensDeErro(resultado);
                }
            }
        } else {
            console.log('Erro ao inserir/atualizar projeto...');
        }
        
    });

    // botao excluir do modalExcluir
    $('div.container').on( 'click', '#btnExcluirForm', function () {
        deletarProjetoDB();
        $('#modalExcluir').modal('hide');
        
    });
});
