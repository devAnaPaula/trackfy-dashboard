import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: 
    border-box; 
    margin: 0; 
    padding: 0;
    }

  html, body, #root {
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-family: ${(p) => p.theme.fonts.body};
    background: ${(p) => p.theme.colors.pageBg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(p) => p.theme.colors.text};
    font-size: 16px;
  }

  .app { 
  display: flex; 
  height:100vh; 
  background: ${(p) => p.theme.colors.pageBg}; }

  .main { 
  flex:1; 
  display:flex; 
  flex-direction:column; 
  overflow:auto; }

  .content { 
  padding:20px 28px; 
  }

  select, input, textarea {
    font-family: inherit;
    font-size: 18px;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  .chart-card { 
  background:${(p) => p.theme.colors.cardBg}; 
  border-radius:10px; 
  padding:16px; 
  box-shadow: 0 6px 18px rgba(27,40,71,0.06); 
  }

  .chart-placeholder { 
  height:420px; 
  border-radius:6px; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  background: linear-gradient(#fbfdff,#f3f6fb); 
  color: ${(p) => p.theme.colors.muted}; 
  font-size:16px; }

  @media (max-width:900px) {
    .content { 
    padding: 16px; 
    }
  }
`;

export default GlobalStyle;
