import Button from '../atoms/Button';
import type { Produto } from '../../../types/produto';
import './ProductList.css';

interface ProductListProps {
  produtos: Produto[];
  aoEditar: (id: string) => void;
  aoDeletar: (id: string) => void;
}

const ProductList = ({ produtos, aoEditar, aoDeletar }: ProductListProps) => {
  return (
    <div className="produtos">
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto._id}>
            {produto.nome} - {produto.preco} - {produto.descricao} - {produto.avaliacao.nota}
            <div className="produtos-acoes">
              <Button variante="perigo" onClick={() => aoDeletar(produto._id)}>Deletar</Button>
              <Button variante="sucesso" onClick={() => aoEditar(produto._id)}>Editar</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
