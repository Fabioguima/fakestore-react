/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import "./Favoritos.css";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(lista);
  }, []);

  function remover(id) {
    const nova = favoritos.filter((p) => p.id !== id);
    setFavoritos(nova);
    localStorage.setItem("favoritos", JSON.stringify(nova));
  }

  if (favoritos.length === 0) {
    return <h3 className="nenhum-favoritado">Nenhum produto favoritado.</h3>;
  }

  return (
    <div className="favoritos-container">
      <h2>Meus Favoritos</h2>
      <ul className="favoritos-lista">
        {favoritos.map((p) => (
          <li key={p.id} className="favorito-card">
            <img className="favorito-img" src={p.image} alt={p.title} />
            <span className="favorito-nome">{p.title}</span>
            <strong className="favorito-preco">R$ {p.price}</strong>
            <button onClick={() => remover(p.id)} className="remover-btn">
              ❌ Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;
