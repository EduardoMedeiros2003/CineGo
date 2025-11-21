let cardContainer = document.querySelector(".card-container");
let dados = [];

// Adiciona um "ouvinte" que espera o conteúdo da página carregar completamente.
document.addEventListener('DOMContentLoaded', () => {
    // Encontra o botão no HTML pelo seu ID.
    const botaoBusca = document.getElementById('botao-busca');

    // Adiciona o evento de clique ao botão, que chamará a função 'iniciaBusca'.
    botaoBusca.addEventListener('click', iniciaBusca);
});

async function iniciaBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa o container antes de adicionar novos cards
    for (let item of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2 class="card-titulo">${item.nome}</h2>
            <div class="card-info">
                <span class="card-ano">${item.ano}</span>
                <span class="card-genero">${item.genero}</span>
            </div>
            <p class="card-descricao">${item.descricao}</p>
            <a href="${item.trailer}" class="card-trailer" target="_blank" rel="noopener noreferrer">
                Ver Trailer
            </a>
        `;
        cardContainer.appendChild(article);
    }
}

// Inicia a busca assim que a página carrega para já exibir os filmes
document.addEventListener('DOMContentLoaded', iniciaBusca);