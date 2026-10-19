import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '../atoms/Button';
import type { Produto } from '../../../types/produto';
import './ProductFilter.css';

interface ProductFilterProps {
  produtos: Produto[];
  aoFiltrar: (nome: string | null) => void;
}

const ProductFilter = ({ produtos, aoFiltrar }: ProductFilterProps) => {
  const [nomeSelecionado, setNomeSelecionado] = useState<string | null>(null);

  const nomesDosProdutos = produtos.map((produto) => produto.nome);

  const filtrar = () => {
    aoFiltrar(nomeSelecionado);
  };

  return (
    <div className="filtro">
      <Autocomplete
        options={nomesDosProdutos}
        value={nomeSelecionado}
        onChange={(_e, novoValor) => setNomeSelecionado(novoValor)}
        renderInput={(params) => <TextField {...params} label="Buscar produto por nome" />}
        className="filtro-autocomplete"
      />
      <Button onClick={filtrar}>Filtrar</Button>
    </div>
  );
};

export default ProductFilter;
