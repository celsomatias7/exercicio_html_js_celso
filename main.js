const form = document.getElementById('form-atividade'); /*criação da variável FORM */

form.addEventListener('submit',function(e) { /*regra de validação do submit do form */
    e.preventDefault();

    verificaCampos();
    

});

function verificaCampos() {
    const inputValorA = document.getElementById('campo-a');
    const inputValorB = document.getElementById('campo-b');

    /*para não permitir que o usuário coloque a mesma atividade duas vezes*/
    if (inputValorA.value < inputValorB.value) {
        alert(`O valor do campo A deve ser maior que o campo B`);
    } else {
        alert(`Está tudo correto, vamos inserir seus dados no sistema`);
}

}
