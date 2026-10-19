export interface Produto {
  _id: string;
  nome: string;
  preco: number;
  descricao: string;
  categoria: string;
  imagem: string;
  avaliacao: {
    nota: number;
    quantidade: number;
  };
}

export interface ProdutoFormulario {
  nome: string;
  preco: string;
  descricao: string;
  categoria: string;
  imagem: string;
  nota: string;
  quantidade: string;
}

export interface ErrosProduto {
  nome?: string;
  preco?: string;
  descricao?: string;
  categoria?: string;
  imagem?: string;
  nota?: string;
  quantidade?: string;
}
