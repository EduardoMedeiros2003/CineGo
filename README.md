# CineGO
Pequeno projeto para facilitar a escolha de filmes.
Implementação das principais funcionalidades do aplicativo web de listagem e consulta de filmes, incluindo toda a arquitetura front-end e integração com banco de dados em JSON.
Este commit estrutura o projeto, define o fluxo de uso e entrega todos os componentes funcionais do sistema.
Tecnologias Utilizadas:
HTML5: estruturação das páginas, componentes e containers de exibição.
CSS3: estilização completa da interface, layout responsivo e organização visual.
JavaScript (ES6+):
  Manipulação da DOM
  Filtros, buscas e ordenações
  Carregamento dinâmico da base de filmes
  Controle dos eventos de interação do usuário
JSON: armazenamento local da base de filmes, contendo título, ano, gênero, direção, trailer e descrição.
Fetch API: carregamento do arquivo JSON no front-end.
Principais Funcionalidades Incluídas:
Exibição da lista completa de filmes
  Renderização dinâmica de todos os itens da base JSON.
  Estrutura organizada em cartões com título, ano e gênero.
Busca inteligente:
  Busca por nome do filme
  Busca por ano
  Busca por gênero
  Busca por diretor
  Busca por qualquer palavra ou trecho na descrição
  Sistema de filtragem totalmente em tempo real.
Visualização Detalhada:
  Cada card permite abrir informações completas do filme:
    nome 
    ano
    gênero
    direção
    descrição
    link para o trailer (YouTube)
Responsividade:
  Layout adaptado para desktop, tablet e mobile.
Organização do código:
  Separação entre HTML, CSS e JavaScript.
  JSON individual para facilitar manutenção e crescimento da base.
  Código comentado e modularizado.
