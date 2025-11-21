let cardContainer = document.querySelector(".card-container");
let dados = [];

async function carregarDadosIniciais() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function iniciaBusca(event) {
    event.preventDefault(); // impede o formulário de recarregar a página

    const campoBusca = document.getElementById('campo-busca');
    const termo = campoBusca.value.toLowerCase().trim();

    const filtrado = dados.filter(item =>
        item.nome.toLowerCase().includes(termo)
    );

    renderizarCards(filtrado);
}

function renderizarCards(lista) {
    cardContainer.innerHTML = "";

    lista.forEach(item => {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2 class="card-titulo">${item.nome}</h2>
            <div class="card-info">
                <span class="card-ano">${item.ano}</span>
                <span class="card-genero">${item.genero}</span>
            </div>
            <p class="card-descricao">${item.descricao}</p>
            <a href="${item.trailer}" class="card-trailer" target="_blank">
                Ver Trailer
            </a>
        `;
        cardContainer.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    carregarDadosIniciais();

    // ativa a busca pelo botão ou apertando Enter
    const formulario = document.getElementById('search-form');
    formulario.addEventListener('submit', iniciaBusca);
});
