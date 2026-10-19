import { useState } from 'react';
import type { ChangeEvent } from 'react';
import axios from 'axios';
import ProductForm from '../organisms/ProductForm';
import PageLayout from '../templates/PageLayout';
import type { ProdutoFormulario, ErrosProduto } from '../../../types/produto';

const produtoVazio: ProdutoFormulario = {
  nome: '',
  preco: '',
  descricao: '',
  categoria: '',
  imagem: '',
  nota: '',
  quantidade: '',
};

const CriarProduto = () => {
  const [produto, setProduto] = useState<ProdutoFormulario>(produtoVazio);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [erros, setErros] = useState<ErrosProduto>({});

  const lidarComMudanca = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const validar = () => {
    const novosErros: ErrosProduto = {};

    if (!produto.nome.trim()) novosErros.nome = 'Nome é obrigatório';
    if (!produto.descricao.trim()) novosErros.descricao = 'Descrição é obrigatória';
    if (!produto.categoria.trim()) novosErros.categoria = 'Categoria é obrigatória';
    if (!produto.imagem.trim()) novosErros.imagem = 'Imagem é obrigatória';

    if (!produto.preco.trim()) {
      novosErros.preco = 'Preço é obrigatório';
    } else if (isNaN(Number(produto.preco))) {
      novosErros.preco = 'Preço precisa ser um número';
    }

    if (!produto.nota.trim()) {
      novosErros.nota = 'Nota é obrigatória';
    } else if (isNaN(Number(produto.nota))) {
      novosErros.nota = 'Nota precisa ser um número';
    }

    if (!produto.quantidade.trim()) {
      novosErros.quantidade = 'Quantidade é obrigatória';
    } else if (isNaN(Number(produto.quantidade))) {
      novosErros.quantidade = 'Quantidade precisa ser um número';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const cadastrarProduto = () => {
    if (!validar()) return;

    axios.post('https://projeto-node-step-t5i1.vercel.app/produtos', {
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      categoria: produto.categoria,
      imagem: produto.imagem,
      avaliacao: { nota: produto.nota, quantidade: produto.quantidade },
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(() => {
        setMensagem('Produto cadastrado com sucesso!');
        setErro('');
        setErros({});
        setProduto(produtoVazio);
      })
      .catch(() => {
        setMensagem('');
        setErro('Erro ao cadastrar produto. Confira os dados e tente novamente.');
      });
  };

  return (
    <PageLayout>
      <ProductForm
        produto={produto}
        aoMudar={lidarComMudanca}
        aoSalvar={cadastrarProduto}
        textoBotao="Cadastrar Produto"
        mensagem={mensagem}
        erro={erro}
        erros={erros}
      />
    </PageLayout>
  );
};

export default CriarProduto;
