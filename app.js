function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Armasena o que o usuario escreveu dentro de um valor para realizar posteriormente a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //converte a pesquisa do usuario para minusculo para facitar a comparação na função abaixo
    campoPesquisa = campoPesquisa.toLowerCase();

    //impede pesquisa com valor vazio
    if(campoPesquisa == ""){
        section.innerHTML = "nada foi colocado para chamar um monstro";
        return;
    }

    // Inicializa strings vazias para armazenar os resultados da pesquisa e facilitar comparaçoes
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada carta no array de cartas
    for (let carta of cartas) {
        //adptaçoes para busca não depender de letras de tamanho certo
        titulo = carta.titulo.toLowerCase();
        descricao = carta.descricao.toLowerCase();
        tags = carta.tags.toLowerCase();
        //Copara a pesquisa do usuario com os titulos e descriçoes da base de dados
        if(carta.titulo.includes(campoPesquisa) || carta.descricao.includes(campoPesquisa)){
            // Constrói o HTML para cada carta, incluindo título, link e descrição
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${carta.link} target="blank">${carta.titulo}</a>
                </h2>
                <p class="descrição-meta">${carta.descricao}</p>
            </div>
        `;
        }
     
    }

    //coloca uma mensagem para o usuario caso a busca de errado
    if(!resultados){
        resultados = "<div class='item-resultado'><h2>Nada foi encontrado.<div>Tente uma forma de busca diferente para chamar um monstro</h2></div>";
    }
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
}