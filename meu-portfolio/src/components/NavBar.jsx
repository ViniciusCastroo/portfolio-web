import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '/assets/logo portfolio.png';
import styled from "styled-components";

// Definindo um componente de header estilizado com $isScrolled
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  transition: all 0.3s ease;
  background: ${({ $isScrolled }) => ($isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent')}; /* Fundo semi-transparente */
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')}; /* Aplica o desfoque quando rolado */
  z-index: 1000; /* Para garantir que fique acima de outros elementos */
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ $isScrolled }) => ($isScrolled ? 'white' : 'white')}; /* Muda a cor do texto */
  text-sm;
  font-semibold;
  transition: all 0.3s ease;
  
  &:hover {
    color: gray; /* Cor do texto ao passar o mouse */
  }
`;

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Ativa quando rolar mais de 50 pixels
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
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        {/* Links de Navegação */}
        <nav className="flex items-center space-x-8">
          <StyledNavLink to="/" $isScrolled={isScrolled}>
            HOME
          </StyledNavLink>
          <StyledNavLink to="/sobre" $isScrolled={isScrolled}>
            SOBRE
          </StyledNavLink>
          <StyledNavLink to="/projetos" $isScrolled={isScrolled}>
            PROJETOS
          </StyledNavLink>
          {/* Botão de Contato */}
          <StyledNavLink
            to="/contato"
            $isScrolled={isScrolled}
            className="border-2 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-transparent"
          >
            CONTATO
          </StyledNavLink>
        </nav>
      </div>
    </Header>
  );
}
