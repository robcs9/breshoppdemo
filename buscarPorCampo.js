// Função para busca de colunas dentro de tabelas

module.exports = function buscarPorCampo(atributo, valor, tabela) {
    let r = {}
    tabela.forEach(
        (elem) => {
            if(valor == elem[atributo]) {
                r = elem;
            }
        }
    );
    return r;
}