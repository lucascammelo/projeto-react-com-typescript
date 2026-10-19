export interface Credenciais {
  email: string;
  senha: string;
}

export interface NovoUsuario {
  nome: string;
  email: string;
  senha: string;
  role: string;
}

export interface RespostaLogin {
  token: string;
}
