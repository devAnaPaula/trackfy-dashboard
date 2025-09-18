import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import iconLogout from "../assets/icons/icon_logout.png";

const HeaderWrap = styled.header`
  background: ${(p) => p.theme.colors.topBlue};
  color: ${(p) => p.theme.colors.white};
  padding: 10px 20px; 
  display: flex;
  align-items: center;
  justify-content: space-between; 
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.06);
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  padding-bottom: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, #6dc7ff, transparent);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s ease;

  &.active {
    background: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: ${(p) => p.theme.colors.white};
    margin-right: 12px;
  }
`;

export default function Header({ onMenuClick }) {
  return (
    <HeaderWrap>
      <Left>
        <MenuButton onClick={onMenuClick}>☰</MenuButton>
        <Title>Trackfy Analytics</Title>
      </Left>
      <Nav>
        <ul>
          <li>
            <StyledNavLink to="/" end>
              <img src={iconLogout} alt="Sair" />
            </StyledNavLink>
          </li>
        </ul>
      </Nav>
    </HeaderWrap>
  );
}