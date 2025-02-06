import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: opacity 0.3s ease;
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 50%;
    background-color: #fff;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    opacity: 0.8;
    
    &:after {
      width: 100%;
    }
  }
`;

const NavBar = memo(() => {
  return (
    <Nav>
      <NavList>
        <li><NavItem to="/">Home</NavItem></li>
        <li><NavItem to="/about">About</NavItem></li>
        <li><NavItem to="/calendar">Shows</NavItem></li>
        <li><NavItem to="/media">Media</NavItem></li>
        <li><NavItem to="/contact">Contact</NavItem></li>
      </NavList>
    </Nav>
  );
});

export default NavBar;
