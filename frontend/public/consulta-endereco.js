function popularForm(resposta) {
    let rua = document.querySelector('#rua');
    let bairro = document.querySelector('#bairro');
    let cidade = document.querySelector('#cidade');
    let estado = document.querySelector('#estado');

    if ("erro" in resposta) {
        alert('cep não encontrado');
        return;
    }
    
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}