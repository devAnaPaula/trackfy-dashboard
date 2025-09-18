# 📊 Dashboard - DATA ANALYTICS

Este projeto tem a finalidade de apontar apartir de um data analytics e painel interativo a quantidade de pessoas por funções e áreas ao longo do tempo (horas, dias e semanas) com gráficos dinâmicos.

A interface foi escolhida como base do próprio sistema utilizado na Trackfy, afim de causar familiarização com o escopo da página e trazer praticidade e um desenvolvimento mais rápido do projeto.

## 🚀 Como rodar o projeto

1.  **Clone o repositório**

    git clone https://github.com/devAnaPaula/trackfy-dashboard.git
    cd trackfy-dashboard


2.  **Instale as dependências**

    npm install

3.  **Inicie o servidor de desenvolvimento**

    npm start

4.  O projeto abrirá automaticamente no navegador (`http://localhost:3000`).

---------------------------------------------------------------------------------------------------------------------------------------------

## 🛠️ Decisões técnicas adotadas

-   **React**: foi escolhido para criar a interface modular e reativa, utilizando o DOM e a extensão do JAVASCRIPT (JSX)

-   **styled-components**: foi utilizado para garantir uma estilização dinâmica com
    suporte a temas, afim de facilitar o desenvolvimento da interface do usuário. (`theme.colors`, `theme.radii`).

-   **Recharts**: a biblioteca de gráficos foi usada para exibir dados em
    **linha, barra e pizza**.

-   **dayjs**: foi utilizado para a manipulação de datas (em um agrupamento por horas, dias ou
    semanas).

-   **Arquivos Principais - ARQUITETURA**:
    -   `App.jsx` → Ponto central da aplicação. Define as rotas usando react-router-dom e organiza o layout base (Sidebar, Header e área de conteúdo).
    -   `Dashboard.jsx` → Página principal do sistema. Conecta os filtros aos gráficos e gerencia o estado dos dados exibidos.
    -   `Filters.jsx` → Componente de filtros dinâmicos, permitindo seleção por função, área, tipo de área e período de tempo (horas, dias ou semanas).
    -   `Charts.jsx` → Módulo responsável pela visualização gráfica dos dados, oferecendo diferentes tipos de gráficos (linha, barra e pizza) através do Recharts.