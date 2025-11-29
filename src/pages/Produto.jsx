import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Produto.css";

function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduto(data))
      .catch((err) => console.error("Erro ao carregar produto:", err));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  function favoritarProduto() {
    const listaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (!listaFavoritos.some((p) => p.id === produto.id)) {
      listaFavoritos.push(produto);
      localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));
      alert("Produto adicionado aos favoritos!");
    } else {
      alert("Esse produto já está nos favoritos!");
    }
  }

  return (
    <div className="produto-container">
      <div className="produto-card">
        <h2 className="produto-nome">{produto.title}</h2>
        <img className="produto-img" src={produto.image} />
        <p className="produto-descricao">{produto.description}</p>
        <p className="produto-preco">R$ {produto.price}</p>
        <button onClick={favoritarProduto} className="favoritar-btn">
          ❤️ Favoritar
        </button>
      </div>
      <button onClick={() => navigate(-1)} className="voltar-btn">
        🔙 Voltar
      </button>
    </div>
  );
}

export default Produto;
