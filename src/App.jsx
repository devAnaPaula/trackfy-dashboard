import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Mapa from "./pages/Map.jsx";

const AppWrap = styled.div`
  display: flex;
  height: 100vh;
  background: ${(p) => p.theme.colors.pageBg};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 56px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Content = styled.div`
  padding: 20px 28px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <AppWrap>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <Main>
          <Header onMenuClick={() => setSidebarOpen(prev => !prev)} />
          <Content>
            <Routes>
              <Route path="/" element={<Navigate to="/Dashboard" />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Mapa" element={<Mapa />} />
            </Routes>
          </Content>
        </Main>
      </AppWrap>
    </Router>
  );
}