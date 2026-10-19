import type { ChangeEvent, MouseEvent } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import type { ProdutoFormulario, ErrosProduto } from '../../../types/produto';
import './ProductForm.css';

interface ProductFormProps {
  produto: ProdutoFormulario;
  aoMudar: (e: ChangeEvent<HTMLInputElement>) => void;
  aoSalvar: (e: MouseEvent<HTMLButtonElement>) => void;
  textoBotao: string;
  mensagem?: string;
  erro?: string;
  erros?: ErrosProduto;
}

const ProductForm = ({ produto, aoMudar, aoSalvar, textoBotao, mensagem, erro, erros = {} }: ProductFormProps) => {
  return (
    <form className="form">
      <FormField rotulo="Nome" tipo="text" nome="nome" valor={produto.nome} aoMudar={aoMudar} erro={erros.nome} />
      <FormField rotulo="Preço" tipo="text" nome="preco" valor={produto.preco} aoMudar={aoMudar} erro={erros.preco} />
      <FormField rotulo="Descrição" tipo="text" nome="descricao" valor={produto.descricao} aoMudar={aoMudar} erro={erros.descricao} />
      <FormField rotulo="Categoria" tipo="text" nome="categoria" valor={produto.categoria} aoMudar={aoMudar} erro={erros.categoria} />
      <FormField rotulo="Imagem" tipo="text" nome="imagem" valor={produto.imagem} aoMudar={aoMudar} erro={erros.imagem} />
      <FormField rotulo="Nota" tipo="text" nome="nota" valor={produto.nota} aoMudar={aoMudar} erro={erros.nota} />
      <FormField rotulo="Quantidade" tipo="text" nome="quantidade" valor={produto.quantidade} aoMudar={aoMudar} erro={erros.quantidade} />
      <Button onClick={aoSalvar}>{textoBotao}</Button>
      {mensagem && <p className="sucesso">{mensagem}</p>}
      {erro && <p className="erro">{erro}</p>}
    </form>
  );
};

export default ProductForm;
