let cardContainer = document.querySelector(".card-container");
let dados = [];

async function carregarDadosIniciais() {
    try {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
        renderizarCards(dados);
    } catch (erro) {
        console.error("Erro ao carregar JSON:", erro);
    }
}

function iniciaBusca(event) {
    event.preventDefault(); // evita reload da página no form

    const campoBusca = document.getElementById('campo-busca');
    const termo = campoBusca.value.toLowerCase();

    const dadosFiltrados = dados.filter(item => {
        return (
            item.nome.toLowerCase().includes(termo) ||
            item.genero.toLowerCase().includes(termo) ||
            item.diretor.toLowerCase().includes(termo) ||
            item.descricao.toLowerCase().includes(termo) ||
            item.ano.toString().includes(termo)
        );
    });

    renderizarCards(dadosFiltrados);
}

function renderizarCards(lista) {
    cardContainer.innerHTML = "";

    for (let item of lista) {
        let article = document.createElement("article");
        article.classList.add("card");

        article.innerHTML = `
            <h2 class="card-titulo">${item.nome}</h2>

            <div class="card-info">
                <span class="card-ano">${item.ano}</span>
                <span class="card-genero">${item.genero}</span>
                <span class="card-diretor">${item.diretor}</span>
            </div>

            <p class="card-descricao">${item.descricao}</p>

            <a href="${item.trailer}" 
               class="card-trailer" 
               target="_blank" 
               rel="noopener noreferrer">
               Ver Trailer
            </a>
        `;

        cardContainer.appendChild(article);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarDadosIniciais();

    const botaoBusca = document.getElementById('botao-busca');
    const formBusca = document.getElementById('search-form');

    botaoBusca.addEventListener('click', iniciaBusca);
    formBusca.addEventListener('submit', iniciaBusca); // Enter também funciona
});
