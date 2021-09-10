function validaProjeto(projeto){
    let erros = [];

    if (typeof projeto['anoregistro'] == undefined || projeto['anoregistro'] == '' || projeto['anoregistro'] == null)  {
        erros.push({texto: "O ano registro do projeto deve ser informado"})
    }

    if (typeof projeto['projeto'] == undefined || projeto['projeto'] == '' || projeto['projeto'] == null)  {
        erros.push({texto: "O número do projeto deve ser informado"})
    }

    if (typeof projeto['numeroFunpec'] == undefined || projeto['numeroFunpec'] == '' || projeto['numeroFunpec'] == null)  {
        erros.push({texto: "O número funpec deve ser informado"})
    }

    if (typeof projeto['tituloProjeto'] == undefined || projeto['tituloProjeto'] == '' || projeto['tituloProjeto'] == null)  {
        erros.push({texto: "O titulo do projeto deve ser informado"})
    }

    if (typeof projeto['ambito'] == undefined || projeto['ambito'] == '' || projeto['ambito'] == null)  {
        erros.push({texto: "O ambito do projeto deve ser informado"})
    }

    if (typeof projeto['parceiro'] == undefined || projeto['parceiro'] == '' || projeto['parceiro'] == null)  {
        erros.push({texto: "O parceiro do projeto deve ser informado"})
    }

    if (typeof projeto['tipoFinanciamento'] == undefined || projeto['tipoFinanciamento'] == '' || projeto['tipoFinanciamento'] == null)  {
        erros.push({texto: "O tipo de financiamento do projeto deve ser informado"})
    }

    if (typeof projeto['classificacaoProjeto'] == undefined || projeto['classificacaoProjeto'] == '' || projeto['classificacaoProjeto'] == null)  {
        erros.push({texto: "A classificação do projeto deve ser informada"})
    }

    if (typeof projeto['tipoCaptacao'] == undefined || projeto['tipoCaptacao'] == '' || projeto['tipoCaptacao'] == null)  {
        erros.push({texto: "O tipode captação do projeto deve ser informado"})
    }

    if (typeof projeto['dataInicio'] == undefined || projeto['dataInicio'] == '' || projeto['dataInicio'] == null)  {
        erros.push({texto: "A data de início do projeto deve ser informada"})
    }

    if (typeof projeto['dataFim'] == undefined || projeto['dataFim'] == '' || projeto['dataFim'] == null)  {
        erros.push({texto: "A data fim do projeto deve ser informada"})
    }

    if (typeof projeto['status'] == undefined || projeto['status'] == '' || projeto['status'] == null)  {
        erros.push({texto: "O status do projeto deve ser informado"})
    }

    if (typeof projeto['valor'] == undefined || projeto['valor'] == '' || projeto['valor'] == null)  {
        erros.push({texto: "O valor do projeto deve ser informado"})
    }

    if (typeof projeto['unidade'] == undefined || projeto['unidade'] == '' || projeto['unidade'] == null)  {
        erros.push({texto: "A unidade do projeto deve ser informada"})
    }

    if (typeof projeto['nomeCoordenador'] == undefined || projeto['nomeCoordenador'] == '' || projeto['nomeCoordenador'] == null)  {
        erros.push({texto: "O nome do(a) coordenador(a) do projeto deve ser informado"})
    }

    if (typeof projeto['unidadeAcademicaCoordenador'] == undefined || projeto['unidadeAcademicaCoordenador'] == '' || projeto['unidadeAcademicaCoordenador'] == null)  {
        erros.push({texto: "A unidade acadêmica do(a) coordenador(a) do projeto deve ser informada"})
    }

    if (typeof projeto['quantidadeDocentes'] == undefined || Number.isInteger(parseInt(projeto['quantidadeDocentes'])) == false || parseInt(projeto['quantidadeDocentes']) < 0 || projeto['quantidadeDocentes'] == '' || projeto['quantidadeDocentes'] == null)  {
        erros.push({texto: "A quantidade de docentes no projeto deve ser um inteiro positivo"})
    }

    if (typeof projeto['quantidadeGraduacao'] == undefined || Number.isInteger(parseInt(projeto['quantidadeGraduacao'])) == false || parseInt(projeto['quantidadeGraduacao']) < 0 || projeto['quantidadeGraduacao'] == null)  {
        erros.push({texto: "A quantidade de bolsistas em graduação do projeto deve ser um inteiro positivo"})
    }

    if (typeof projeto['quantidadeEspecializacao'] == undefined || Number.isInteger(parseInt(projeto['quantidadeEspecializacao'])) == false  || parseInt(projeto['quantidadeEspecializacao']) < 0 || projeto['quantidadeEspecializacao'] == null)  {
        erros.push({texto: "A quantidade de bolsistas em especialização do projeto deve ser um inteiro positivo"})
    }

    if (typeof projeto['quantidadeMestrado'] == undefined || Number.isInteger(parseInt(projeto['quantidadeMestrado'])) == false || parseInt(projeto['quantidadeMestrado']) < 0 || projeto['quantidadeMestrado'] == null)  {
        erros.push({texto: "A quantidade de bolsistas em mestrado do projeto deve ser um inteiro positivo"})
    }

    if (typeof projeto['quantidadeDoutorado'] == undefined || Number.isInteger(parseInt(projeto['quantidadeDoutorado'])) == false || parseInt(projeto['quantidadeDoutorado']) < 0 || projeto['quantidadeDoutorado'] == null)  {
        erros.push({texto: "A quantidade de bolsistas em doutorado do projeto deve ser um inteiro positivo"})
    }

    if (typeof projeto['quantidadeConvidado'] == undefined || Number.isInteger(parseInt(projeto['quantidadeConvidado'])) == false || parseInt(projeto['quantidadeConvidado']) < 0 || projeto['quantidadeConvidado'] == null)  {
        erros.push({texto: "A quantidade de especialistas convidados do projeto deve ser um inteiro positivo"})
    }

    if (typeof projeto['quantidadeCLT'] == undefined || Number.isInteger(parseInt(projeto['quantidadeCLT'])) == false || parseInt(projeto['quantidadeCLT']) < 0 || projeto['quantidadeCLT'] == null)  {
        erros.push({texto: "A quantidade de profissionais em regime CLT do projeto deve ser um inteiro positivo"})
    }

    if (typeof projeto['quantidadeTecnico'] == undefined || Number.isInteger(parseInt(projeto['quantidadeTecnico'])) == false || parseInt(projeto['quantidadeTecnico']) < 0 || projeto['quantidadeTecnico'] == null)  {
        erros.push({texto: "A quantidade de técnicos da UFRN do projeto deve ser um inteiro positivo"})
    }
    
    const dataInicio = Date.parse(projeto['dataFim']) - Date.parse(projeto['dataInicio'])
    if (dataInicio <= 0 ){
        erros.push('A data de início não pode ser maior do que a data fim do projeto.')
    }

    return erros;
}

module.exports = {validaProjeto}