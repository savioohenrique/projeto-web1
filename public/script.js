let tabela = '';

let adicionaProjeto = function () {
    console.log("Cadastrando novo projeto...");

    let anoRegistro = document.getElementById("anoRegistro");
    let projeto = document.getElementById("projeto");
    let numeroFunpec = document.getElementById("numeroFunpec");
    let tituloProjeto = document.getElementById("tituloProjeto");
    let ambito = document.getElementById("ambito");
    let parceiro = document.getElementById("parceiro");
    let tipoFinanciamento = document.getElementById("tipoFinanciamento");
    let classificacaoProjeto = document.getElementById("classificacaoProjeto");
    let tipoCaptacao = document.getElementById("tipoCaptacao");
    let dataInicio = document.getElementById("dataInicio");
    let dataFim = document.getElementById("dataFim");
    let status = document.getElementById("status");
    let valor = document.getElementById("valor");
    let unidade = document.getElementById("unidade");
    let nomeCoordenador = document.getElementById("nomeCoordenador");
    let unidadeAcademicaCoordenador = document.getElementById("unidadeAcademicaCoordenador");
    let quantidadeDocentes = document.getElementById("quantidadeDocentes");
    let quantidadeGraduacao = document.getElementById("quantidadeGraduacao");
    let quantidadeEspecializacao = document.getElementById("quantidadeEspecializacao");
    let quantidadeMestrado = document.getElementById("quantidadeMestrado");
    let quantidadeDoutorado = document.getElementById("quantidadeDoutorado");
    let quantidadeConvidado = document.getElementById("quantidadeConvidado");
    let quantidadeCLT = document.getElementById("quantidadeCLT");
    let quantidadeTecnico = document.getElementById("quantidadeTecnico");
    let quantidadeAditivos = document.getElementById("quantidadeAditivos");
    let tipoAditivo = document.getElementById("tipoAditivo");
    let dataAditivo = document.getElementById("dataAditivo");
    let descricaoAditivo = document.getElementById("descricaoAditivo");

    let list_item = document.createElement('li');

    let text = document.createElement("label");
    text.innerHTML =    anoRegistro.value + " | " + 
                        projeto.value + " | " + 
                        numeroFunpec.value + " | " + 
                        tituloProjeto.value + " | " + 
                        ambito.value +  " | " + 
                        parceiro.value +  " | " + 
                        tipoFinanciamento.value +  " | " + 
                        classificacaoProjeto.value +  " | " + 
                        tipoCaptacao.value +  " | " + 
                        dataInicio.value +  " | " + 
                        dataFim.value +  " | " + 
                        status.value +  " | " + 
                        valor.value +  " | " + 
                        unidade.value +  " | " + 
                        nomeCoordenador.value +  " | " + 
                        unidadeAcademicaCoordenador.value +  " | " + 
                        quantidadeDocentes.value +  " | " + 
                        quantidadeGraduacao.value +  " | " + 
                        quantidadeEspecializacao.value +  " | " + 
                        quantidadeMestrado.value +  " | " + 
                        quantidadeDoutorado.value +  " | " + 
                        quantidadeConvidado.value +  " | " + 
                        quantidadeCLT.value +  " | " + 
                        quantidadeTecnico.value +  " | " + 
                        quantidadeAditivos.value +  " | " + 
                        tipoAditivo.value +  " | " + 
                        dataAditivo.value +  " | " +
                        descricaoAditivo.value +  " ";

    let btn_remover = document.createElement("button");
    btn_remover.innerHTML = "X";
    btn_remover.className = "remover";
    btn_remover.onclick = removerProjeto;

    let btn_editar = document.createElement("button");
    btn_editar.innerHTML = "Editar";
    btn_editar.className = "editar";
    btn_editar.onclick = editarProjeto;

    list_item.appendChild(text);
    list_item.appendChild(btn_editar);
    list_item.appendChild(btn_remover);

    NovosProjetos.appendChild(list_item);
    adicionaProjetoDB();
};





let adicionaProjetoDB = async function () {
    console.log("Cadastrando novo projeto...");

    let anoRegistro = document.getElementById("anoRegistro");
    let numeroProjeto = document.getElementById("projeto");
    let numeroFunpec = document.getElementById("numeroFunpec");
    let tituloProjeto = document.getElementById("tituloProjeto");
    let ambito = document.getElementById("ambito");
    let parceiro = document.getElementById("parceiro");
    let tipoFinanciamento = document.getElementById("tipoFinanciamento");
    let classificacaoProjeto = document.getElementById("classificacaoProjeto");
    let tipoCaptacao = document.getElementById("tipoCaptacao");
    let dataInicio = document.getElementById("dataInicio");
    let dataFim = document.getElementById("dataFim");
    let status = document.getElementById("status");
    let valor = document.getElementById("valor");
    let unidade = document.getElementById("unidade");
    let nomeCoordenador = document.getElementById("nomeCoordenador");
    let unidadeAcademicaCoordenador = document.getElementById("unidadeAcademicaCoordenador");
    let quantidadeDocentes = document.getElementById("quantidadeDocentes");
    let quantidadeGraduacao = document.getElementById("quantidadeGraduacao");
    let quantidadeEspecializacao = document.getElementById("quantidadeEspecializacao");
    let quantidadeMestrado = document.getElementById("quantidadeMestrado");
    let quantidadeDoutorado = document.getElementById("quantidadeDoutorado");
    let quantidadeConvidado = document.getElementById("quantidadeConvidado");
    let quantidadeCLT = document.getElementById("quantidadeCLT");
    let quantidadeTecnico = document.getElementById("quantidadeTecnico");
    let quantidadeAditivos = document.getElementById("quantidadeAditivos");
    let tipoAditivo = document.getElementById("tipoAditivo");
    let dataAditivo = document.getElementById("dataAditivo");
    let descricaoAditivo = document.getElementById("descricaoAditivo");

    let projeto = {
        "anoregistro" : anoRegistro.value , 
        "projeto" : numeroProjeto.value , 
        "numeroFunpec" : numeroFunpec.value,
        "tituloProjeto" : tituloProjeto.value,
        "ambito" : ambito.value, 
        "parceiro" : parceiro.value, 
        "tipoFinanciamento" : tipoFinanciamento.value, 
        "classificacaoProjeto" : classificacaoProjeto.value, 
        "tipoCaptacao" : tipoCaptacao.value, 
        "dataInicio" : dataInicio.value, 
        "dataFim" : dataFim.value, 
        "status" : status.value, 
        "valor" : valor.value, 
        "unidade" : unidade.value, 
        "nomeCoordenador" : nomeCoordenador.value, 
        "unidadeAcademicaCoordenador" : unidadeAcademicaCoordenador.value, 
        "quantidadeDocentes" : quantidadeDocentes.value, 
        "quantidadeGraduacao" : quantidadeGraduacao.value, 
        "quantidadeEspecializacao" : quantidadeEspecializacao.value, 
        "quantidadeMestrado" : quantidadeMestrado.value, 
        "quantidadeDoutorado" : quantidadeDoutorado.value, 
        "quantidadeConvidado" : quantidadeConvidado.value, 
        "quantidadeCLT" : quantidadeCLT.value, 
        "quantidadeTecnico" : quantidadeTecnico.value, 
        "quantidadeAditivos" : quantidadeAditivos.value, 
        "tipoAditivo" : tipoAditivo.value, 
        "dataAditivo" : dataAditivo.value,
        "descricaoAditivo" : descricaoAditivo.value 
    };

    console.log(projeto);
    console.log();
    console.log(JSON.stringify(projeto));

    await postProjeto('http://localhost:3000/projetos', projeto);

};

let listarProjetos = async function () {
    console.log('Listando projetos');
    let projetos = await buscarProjetos();
    jsonData = projetos;
    atualizarTabela();
}


async function buscarProjetos() {
    let url = 'http://localhost:3000/projetos';
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

async function postProjeto(urlToPost, resourceToPost){
    try {
        let response = await fetch(urlToPost, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Request-Method': 'POST'                
            },
            body: JSON.stringify(resourceToPost)
        });
        let msg = await response.json();
        console.log(msg ? msg : response);
        return msg;
    } catch (error) {
        console.log(error)
    }
}




let removerProjeto = function () {
    console.log("Removendo projeto...");

    let listItem = this.parentNode;
    let ul=listItem.parentNode;
    ul.removeChild(listItem);
};

let editarProjeto = function () {
    console.log("Editar projeto...");

    let listItem = this.parentNode;
    let label = listItem.querySelector("label");

    var edit_text = document.createElement("input");
    listItem.insertBefore(edit_text, this);
    edit_text.type = "text";
    edit_text.name = "editProjeto";	
    edit_text.value = label.innerHTML;

    this.innerHTML = "Salvar";
    this.onclick = salvarProjeto; 
};

let salvarProjeto = function () {
    console.log("Salvando tarefa...");
    
    let listItem = this.parentNode;
    let label = listItem.querySelector("label");
    let text_input = listItem.querySelector('input[type=text]');

    label.innerHTML = text_input.value;

    let btn_salvar = listItem.querySelector("button[class=editar]");

    btn_salvar.innerHTML = "Editar";
    btn_salvar.onclick = editarProjeto;

    listItem.removeChild(text_input);
};

const NovosProjetos = document.getElementById("projetosNovos");

// fazendo a tabela com json estatico para testes
var jsonData = [];

const btnGroupStr = '<div class="btn-group"><a id="btnEdtitar" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#myModal" href=#/>' + 'Editar' + '</a>'
+ '<a id="btnExcluir" class="btn btn-danger btn-sm" href=#/>' + 'Excluir' + '</a>' + "</div>";

function atualizarTabela(){
    table = $('#table').DataTable();
    table.destroy();

    preencherTabela();
}

function preencherTabela() {
    console.log("Preenchendo tabela");
    tabela = $('#table').DataTable({
        data: jsonData,
        scrollY: "500px",
        scrollX: true,
        scrollCollapse: true,
        // dom: 'Bfrtip',
        // buttons: [
        //     {
        //         text: 'Adicionar',
        //         action: function ( e, dt, node, config ) {
        //             alert( 'Button 1 clicked on' );
        //         }
        //     }
        // ],
        "columnDefs": [ {
            // targets: [0, 3, 4, 5, 6, 7, 8, 9, 10, 17, 18, 19, 20, 21, 22, 23], visible: false,
            // { targets: '_all', visible: true },
            // "width": "40%",
            // targets: '_all', visible: false, width: '20px',
            "targets": 0,
            // "data": null,
            "defaultContent": btnGroupStr,
            // "mRender": function(data, type, full) {
            //     return '<div class="btn-group"><a id="btnEdtitar" class="btn btn-info btn-sm" href=#/' + full[0] + '>' + 'Editar' + '</a>'
            //     + '<a id="btnExcluir" class="btn btn-danger btn-sm" href=#/' + full[0] + '>' + 'Excluir' + '</a>' + "</div>";
            // }
            // "render": function(data, type, full, meta){
            //     if (full.activated) {
            //         return '<button class="btn btn-mini btn-primary pull-right"> Enabled</button>';
            //     } else {
            //         return '<button class="btn btn-mini btn-danger pull-right"> Disabled</button>';
            //     }
            //  }
        }],
        "columns": [
            { data: "", /*width: "50px"*/ }, // espaco necessario para a coluna dos botoes
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
        
        // initComplete: function() {
        //     this.api().columns().every( function() {
        //         let column = this;
        //         let select = $('<select><option value=""></option></select>')
        //             .appendTo( $(column.footer()).empty() )
        //             .on('change', function() {
        //                 let val = $.fn.dataTable.util.escapeRegex(
        //                     $(this).val()
        //                 );
    
        //                 column
        //                     .search( val ? '^' + val + '$' : '', true, true)
        //                     .draw();
        //             })
        //         column.data().unique().sort().each( (d, j) => {
        //             select.append( '<option value=" '+d+' ">'+d+'</option>')
        //         });
        //     });
        // },
    });

    
}

$(document).ready(function() {
    listarProjetos();

    preencherTabela();    

    // $('#table tbody').on( 'click', '#btnEdtitar', function () {
    //     var rowData = tabela.fnGetData(0).length;
    //     alert( data[0] +"'s lenght is: "+ rowData );
    // });
    $('#table tbody').on( 'click', '#btnEdtitar', function () {
        // var rowData = tabela.fnGetData(0).length;
        // alert( data[0] +"'s lenght is: "+ rowData );
        // var d = tabela.row(this).data();

        // alert(tabela.row(this).data(d).draw());
        // alert( "funcionou" );
    });
    $('#table tbody').on( 'click', '#btnExcluir', function () {
        // var rowData = tabela.fnGetData(0).length;
        // alert( data[0] +"'s lenght is: "+ rowData );
        alert( "Deseja Realmente Excluir ?" );
    });
    // tabela.buttons( 1, null ).container().appendTo(
    //     tabela.table().container()
    // );
});

// $('#table').DataTable({
//     "data": jsonData,
//     "columns": [
//       { "data": "meta.type" },
//       { "data": "meta.version" }
//     ]
// });
