import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '/assets/logo portfolio.png';
import styled from "styled-components";

// Definindo um componente de header estilizado
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  transition: all 0.3s ease;
  background: ${({ $isScrolled }) => ($isScrolled ? 'rgba(30, 57, 137, 0.0)' : '#1E3989')}; /* Azul sólido quando não rolado e azul semitransparente quando rolado */
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')}; /* Aplica o desfoque quando rolado */
  z-index: 1000; /* Para garantir que fique acima de outros elementos */
`;

const StyledNavLink = styled(NavLink)`
  color: white; /* Muda a cor do texto */
  text-sm;
  font-semibold;
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
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-20" />
          </NavLink>
        </div>
        <nav className="flex items-center space-x-8">
          <StyledNavLink to="/">
            HOME
          </StyledNavLink>
          <StyledNavLink to="/sobre">
            SOBRE
          </StyledNavLink>
          <StyledNavLink to="/projetos">
            PROJETOS
          </StyledNavLink>
          {/* Botão de Contato */}
          <StyledNavLink
            to="/contato"
            className="border-2 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-transparent"
          >
            CONTATO
          </StyledNavLink>
        </nav>
      </div>
    </Header>
  );
}
