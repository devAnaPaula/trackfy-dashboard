import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo-cor-2.png";
import logoCompleta from "../assets/logo-cor-2-_1_.png";
import iconMenu from "../assets/icons/icon_menu.png";
import iconUser from "../assets/icons/icon_user.png";
import iconCharts from "../assets/icons/icon_charts.png";
import iconDashboard from "../assets/icons/icon_mapa.png";

const SidebarWrap = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(p) => (p.isOpen ? "0" : "-200px")};
  width: 200px;
  background: ${(p) => p.theme.colors.sidebarBlue};
  color: ${(p) => p.theme.colors.white};
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: left 0.2s, width 0.2s;
  z-index: 1000;
  
  @media (min-width: 769px) {
    left: 0;
    width: ${(p) => (p.hoverOpen ? "200px" : "56px")};
    align-items: ${(p) => (p.hoverOpen ? "flex-start" : "center")};
  }
`;

const LogoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.hoverOpen ? "flex-start" : "center")};
  padding: 6px;
  margin-bottom: 18px;

  img {
    height: 36px;
  }

  .logoCompleta { display: ${(p) => (p.hoverOpen ? "block" : "none")}; }
  .logo { display: ${(p) => (p.hoverOpen ? "none" : "block")}; }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuItem = styled.li` width: 100%; `;

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.hoverOpen ? "flex-start" : "center")};
  gap: ${(p) => (p.hoverOpen ? "12px" : "0")};
  padding: 10px 12px;
  border-radius: 8px;
  min-height: 44px;
  transition: background 0.2s;

  &:hover { background: rgba(255, 255, 255, 0.06); }

  img.icon { width: 30px; height: 30px; }

  span.label { display: ${(p) => (p.hoverOpen ? "inline-block" : "none")}; }
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 8px 0 4px 0;
  display: flex;
  justify-content: ${(p) => (p.hoverOpen ? "flex-start" : "center")};
`;

export default function Sidebar({ open, setOpen }) {
  const [hover, setHover] = useState(false);

  const isOpen = open;
  const hoverOpen = hover || open;

  function renderMenuItem(to, iconSrc, labelText) {
    return (
      <MenuItem>
        <NavLink to={to} style={{ textDecoration: "none", color: "inherit" }}>
          {({ isActive }) => (
            <LinkBox hoverOpen={hoverOpen} style={{ background: isActive ? "#3a73e0" : "transparent" }}>
              <img className="icon" src={iconSrc} alt={labelText} />
              <span className="label">{labelText}</span>
            </LinkBox>
          )}
        </NavLink>
      </MenuItem>
    );
  }

  function handleClickItem() {
    if (open) setOpen(false);
  }

  return (
    <SidebarWrap
      isOpen={isOpen}
      hoverOpen={hoverOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <LogoBox hoverOpen={hoverOpen}>
        <img className="logo" src={logo} alt="logo" />
        <img className="logoCompleta" src={logoCompleta} alt="logo completa" />
      </LogoBox>

      <Menu>
        <div onClick={handleClickItem}>{renderMenuItem("/dashboard", iconDashboard, "Dashboard")}</div>
        <div onClick={handleClickItem}>{renderMenuItem("/mapa", iconCharts, "Mapa")}</div>
        <div onClick={handleClickItem}>{renderMenuItem("/profile", iconUser, "Perfil")}</div>
      </Menu>

      <Bottom hoverOpen={hoverOpen}>
        <NavLink to="/">
          <LinkBox hoverOpen={hoverOpen} style={{ paddingLeft: hoverOpen ? 12 : 0 }}>
            <img className="icon" src={iconMenu} alt="Menu" />
            <span className="label">Menu</span>
          </LinkBox>
        </NavLink>
      </Bottom>
    </SidebarWrap>
  );
}
