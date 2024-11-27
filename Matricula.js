function formatarTelefone(input) {
    let telefone = input.value.replace(/\D/g, ''); // Remove todos os caracteres que não são números
    telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona parênteses no DDD
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço no número
    input.value = telefone; // Atualiza o valor do input formatado
}
