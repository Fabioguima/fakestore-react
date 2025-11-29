import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListaProdutos from "./pages/ListaProdutos";
import Produto from "./pages/Produto";
import Favoritos from "./pages/Favoritos";
import "./App.css";

function App() {
  return (
    <BrowserRouter className="corpo">
      <nav className="nav-bar">
        <Link to="/">Produtos</Link> <Link to="/favorites">Favoritos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/product/:id" element={<Produto />} />
        <Route path="/favorites" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
