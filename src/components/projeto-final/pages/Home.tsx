import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductList from '../organisms/ProductList';
import ProductFilter from '../organisms/ProductFilter';
import PageLayout from '../templates/PageLayout';
import type { Produto } from '../../../types/produto';

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<string | null>(null);
  const navigate = useNavigate();

  const produtosExibidos = filtro
    ? produtos.filter((produto) => produto.nome === filtro)
    : produtos;

  const carregarProdutos = () => {
    axios.get<Produto[]>('https://projeto-node-step-t5i1.vercel.app/produtos')
      .then((response) => {
        setProdutos(response.data);
      });
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const deletarProduto = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://projeto-node-step-t5i1.vercel.app/produtos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      carregarProdutos();
    } catch (err) {
      console.error('Erro ao deletar', err);
      alert('Erro ao deletar o produto');
    }
  };

  const editarProduto = (id: string) => {
    navigate(`/EditarProduto/${id}`);
  };

  return (
    <PageLayout>
      <ProductFilter produtos={produtos} aoFiltrar={setFiltro} />
      <ProductList produtos={produtosExibidos} aoEditar={editarProduto} aoDeletar={deletarProduto} />
    </PageLayout>
  );
};

export default Home;
