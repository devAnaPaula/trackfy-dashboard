
# Projeto de Dashboard com Mapa Interativo

Este projeto é um **painel de visualização de dados** que combina **gráficos interativos**, **filtros dinâmicos** e um **mapa com marcações** para monitorar a quantidade de pessoas em diferentes áreas.  
Foi desenvolvido em **React** utilizando bibliotecas como **Recharts** e **Mapbox GL** para visualização de dados.

---

## Funcionalidades

- **Sidebar expansível** com navegação entre as páginas principais:
  - Dashboard
  - Mapa
  - Perfil
- **Dashboard com gráficos interativos:**
  - Linha (`LineChart`)
  - Barra (`BarChart`)
  - Circular (`PieChart`)
- **Filtros dinâmicos:**
  - Função (ex: Pintor, Mecânico)
  - Área (ex: Oficina Central, Tanques)
  - Tipo de área (Produtiva ou Complementar)
  - Período (Horas, Dias, Semanas)
- **Mapa interativo** usando **Mapbox**:
  - Marcadores coloridos indicando tipo de área:
    - **Vermelho** → Produtiva
    - **Azul** → Complementar
  - Popups mostrando informações detalhadas de cada área
- **Layout responsivo** para desktop e mobile

---

## Estrutura do Projeto

```
src/
├── App.jsx            # Componente principal com rotas e layout
├── components/
│   ├── Sidebar.jsx    # Barra lateral de navegação
│   ├── Header.jsx     # Cabeçalho (não enviado, mas referenciado)
│   ├── Filters.jsx    # Filtros do dashboard
│   └── Charts.jsx     # Componente de gráficos
├── pages/
│   ├── Dashboard.jsx  # Tela principal de visualização
│   └── Map.jsx        # Tela do mapa interativo
├── data/
│   ├── Data.json      # Dados de pessoas por área
│   └── areas.js       # Dados fixos das áreas geográficas
└── assets/
    └── icons/         # Ícones do projeto
```

---

## Tecnologias Utilizadas

| Tecnologia       | Descrição                                  |
|------------------|--------------------------------------------|
| **React**        | Biblioteca principal para construção da UI |
| **React Router** | Gerenciamento de rotas                     |
| **Styled Components** | Estilização com CSS-in-JS          |
| **Recharts**     | Gráficos interativos                      |
| **Mapbox GL**    | Mapa interativo com marcadores            |
| **Day.js**       | Manipulação de datas                      |

---

## Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/devAnaPaula/trackfy-dashboard.git
cd cd trackfy-dashboard
```

### 2. Instalar dependências
```bash
npm install
```

Dependências principais:
- `react-router-dom`
- `styled-components`
- `recharts`
- `mapbox-gl`
- `dayjs`

```bash
npm install react-router-dom styled-components recharts mapbox-gl dayjs
```

### 3. Executar o projeto
```bash
npm start
```

A aplicação ficará disponível em:
```
http://localhost:3000
```

---

## Detalhes das Páginas

### **1. Dashboard (`/dashboard`)**
O Dashboard exibe dados em diferentes formatos de gráfico, com a possibilidade de aplicar filtros dinâmicos.

#### Filtros disponíveis:
- **Função** → Filtra por cargo do trabalhador.
- **Área** → Filtra por localização específica.
- **Tipo de Área** → Produtiva ou Complementar.
- **Tempo** → Visualização agrupada por horas, dias ou semanas.

#### Gráficos:
- **Linha (LineChart)** → Evolução temporal.
- **Barra (BarChart)** → Comparação entre funções.
- **Circular (PieChart)** → Distribuição por áreas.

> Arquivos principais:  
> - `Dashboard.jsx`  
> - `Filters.jsx`  
> - `Charts.jsx`

---

### **2. Mapa (`/mapa`)**
Mapa interativo que mostra as áreas cadastradas com:
- **Marcadores coloridos** (vermelho/azul)
- **Popup** com informações:
  - Nome da área
  - Tipo (Produtiva ou Complementar)
  - Quantidade total de pessoas no momento

> Arquivo principal:  
> - `Map.jsx`

---

## 📁 Estrutura dos Dados

### **Data.json** (exemplo)
```json
{
  "dadosPessoas": [
    {
      "funcao": "Pintor",
      "area": "Oficina Central",
      "quantidade": 5,
      "data": "2025-09-18T10:00:00Z"
    },
    {
      "funcao": "Mecânico",
      "area": "Galpão XYZ",
      "quantidade": 3,
      "data": "2025-09-18T11:00:00Z"
    }
  ]
}
```

### **areas.js** (exemplo)
```js
export default [
  {
    nome: "Oficina Central",
    tipo: "Produtiva",
    latitude: -12.8543,
    longitude: -38.4547
  },
  {
    nome: "Tanques",
    tipo: "Complementar",
    latitude: -12.8550,
    longitude: -38.4552
  }
];
```

---

## Navegação e Rotas

| Rota          | Componente   | Descrição                       |
|---------------|--------------|---------------------------------|
| `/`           | Redirect     | Redireciona para `/dashboard`  |
| `/dashboard`  | Dashboard    | Visualização dos gráficos       |
| `/mapa`       | Mapa         | Visualização do mapa interativo |
| `/profile`    | Profile (WIP)| Página futura de perfil         |

---

## 📝 Decisões Técnicas Tomadas

Durante o desenvolvimento deste projeto, algumas decisões técnicas foram tomadas para garantir **desempenho**, **manutenção** e **escalabilidade**:

1. **Separação clara de responsabilidades**  
   - As páginas e componentes foram divididos em pastas distintas (`pages` e `components`) para facilitar manutenção e entendimento do projeto.

2. **Uso de Styled Components**  
   - Optei por CSS-in-JS para ter **estilização encapsulada**, evitando conflitos de classes e permitindo maior flexibilidade na criação de temas.

3. **Gerenciamento de estado local simples com React Hooks**  
   - Utilização de useState e useEffect para controlar os dados dentro dos componentes, sem precisar de ferramentas mais complexas como Redux, já que o projeto ainda é pequeno.

4. **Filtros desacoplados do Dashboard**  
   - O componente `Filters` foi desenvolvido de forma independente, comunicando-se com o `Dashboard` via callbacks (`props`) para maior reusabilidade.

5. **Gráficos com Recharts**  
   - Escolhido por ser simples, responsivo e com suporte a múltiplos tipos de gráficos.

6. **Mapbox GL para mapa interativo**  
   - Escolhido pela flexibilidade na customização de mapas, suporte a camadas e bom desempenho em aplicações web.

7. **Padronização dos dados**  
   - Estrutura JSON definida (`Data.json` e `areas.js`) para simplificar integração futura com APIs.

8. **Design responsivo**  
   - A sidebar e os demais componentes foram projetados para se adaptar tanto em telas desktop quanto em mobile.

---

## 📸 Layout

### **Sidebar**
- Colapsa automaticamente em telas pequenas.
- Ícones permanecem visíveis, expandindo nomes ao passar o mouse.

### **Dashboard**
- Gráficos dinâmicos
- Filtros no topo
- Layout responsivo

### **Mapa**
- Marcadores coloridos
- Popup interativo
- Zoom configurado para 17

---

## Uma possível melhoria

O projeto utiliza apenas os Hooks nativos do React, como useState e useEffect, para gerenciar o estado dos componentes. Essa escolha foi feita porque, no momento, não há necessidade de ferramentas mais complexas. Recursos como Redux ou Context API só seriam considerados em uma aplicação maior, que exigisse um controle de estado mais avançado e compartilhado entre diferentes partes do sistema.