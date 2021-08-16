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





let adicionaProjetoDB = function () {
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

};

let listarProjetos = function () {
    let projetos = buscarProjetos();

    console.log(projetos);
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
