function validarFormulario(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var tipoPessoa = document.getElementById("tipoPessoa").value;
    var horarioServico = document.getElementById("tipoServico").value;
    var descricao = document.getElementById("descricao").value;

    if (nome === "" || telefone === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    } else {
        alert("O formulário foi enviado com sucesso!\n\nNome: " + nome + "\nTelefone: " + telefone + "\nE-mail: " + email + "\ntipoPessoa: " + tipoPessoa + "\nMelhor horário de Contato: " + horarioContato + "\ntipoServico: " + tipoServico + "\nDescricao do Projeto: " + descricao);
        return true;
    }

}
