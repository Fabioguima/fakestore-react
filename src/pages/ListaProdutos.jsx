import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListaProdutos.css";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div className="lista-produtos">
      <h2>Catálogo de Produtos</h2>

      {produtos.length === 0 && <p>Carregando...</p>}

      <ul>
        {produtos.map((p) => (
          <li key={p.id} className="lista-produto-card">
            <Link to={`/product/${p.id}`} className="lista-link-card">
              <img className="lista-produto-img" src={p.image} alt={p.title} />
              <span className="lista-produto-nome">{p.title}</span>
              <strong className="lista-produto-preco">R$ {p.price}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProdutos;
