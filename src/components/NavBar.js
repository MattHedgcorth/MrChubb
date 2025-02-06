import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(18, 18, 18, 0.95);
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <li><NavItem to="/">Home</NavItem></li>
        <li><NavItem to="/about">About</NavItem></li>
        <li><NavItem to="/calendar">Calendar</NavItem></li>
        <li><NavItem to="/media">Media</NavItem></li>
        <li><NavItem to="/contact">Contact</NavItem></li>
      </NavList>
    </Nav>
  );
};

export default NavBar;
