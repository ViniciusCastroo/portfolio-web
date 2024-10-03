import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"; // Caminho ajustado
import Formulario from "./components/Formulario";

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Formulario />} />
                {/* Outras rotas, se necessário */}
            </Routes>
        </Router>
    );
}

export default Main;
