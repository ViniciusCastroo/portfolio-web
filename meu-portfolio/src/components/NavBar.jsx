import { NavLink } from "react-router-dom";
import logo from '/assets/logo portfolio.png';

export default function NavBar() {
  return (
    <header className="bg-gray-800 p-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="h-20" /> 
        </div>
        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-white text-sm font-semibold hover:text-gray-400 transition-all"
          >
            HOME
          </NavLink>
          <NavLink
            to="/sobre"
            className="text-white text-sm font-semibold hover:text-gray-400 transition-all"
          >
            SOBRE
          </NavLink>
          <NavLink
            to="/projetos"
            className="text-white text-sm font-semibold hover:text-gray-400 transition-all"
          >
            PROJETOS
          </NavLink>

          {/* Contact Button */}
          <NavLink
            to="/contato"
            className="text-white text-sm font-semibold border-2 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-transparent transition-all"
          >
            CONTATO
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
