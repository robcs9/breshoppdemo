// Função para busca de colunas dentro de tabelas

module.exports = function buscarPorCampo(tabela, atributo, valorDeBusca) {
    let r = {}
    tabela.forEach(
        (elem) => {
            if(valorDeBusca == elem[atributo]) {
                r = elem;
            }
        }
    );
    return r;
}