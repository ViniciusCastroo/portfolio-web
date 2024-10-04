import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '/assets/logo portfolio.png'; // Verifique se o caminho está correto
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  transition: all 0.3s ease;
  background: ${({ $isScrolled }) => ($isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')};
  z-index: 1000;
`;

const StyledNavLink = styled(NavLink)`
  color: white; 
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    color: gray;
  }
`;

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header $isScrolled={isScrolled}>
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <nav className="flex items-center space-x-8">
          <StyledNavLink to="/">HOME</StyledNavLink>
          <StyledNavLink to="/sobre">SOBRE</StyledNavLink>
          <StyledNavLink to="/projetos">PROJETOS</StyledNavLink>
          <StyledNavLink to="/contato" className="border-2 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-transparent">
            CONTATO
          </StyledNavLink>
        </nav>
      </div>
    </Header>
  );
}
