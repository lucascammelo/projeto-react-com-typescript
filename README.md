# Projeto Final React com TypeScript - Step

Sistema de cadastro e gerenciamento de produtos, com login de usuário, feito como Projeto Final do módulo de TypeScript do curso Step. É a reescrita em TypeScript do [projeto final de React](https://github.com/lucascammelo/project-react-step) — mesma lógica, mesmas telas, agora com tipagem completa.

## Vídeo de apresentação

https://youtu.be/p_NdahEGFkM

## Funcionalidades

- Cadastro e login de usuário
- Rotas protegidas (só acessa logado)
- Listagem de produtos com filtro de busca (Autocomplete do Material UI)
- Criar, editar e deletar produto
- Tema claro/escuro (Context API)

## Organização do código

O código segue a metodologia **Atomic Design**, em `src/components/projeto-final/`:

- `atoms/` — Button, Input, Label, Select
- `context/` — ThemeContext (tema claro/escuro)
- `molecules/` — FormField
- `organisms/` — Header, LoginForm, ProductFilter, ProductForm, ProductList, RegistrarForm
- `pages/` — CriarProduto, EditarProduto, Home, Login, Registrar
- `routes/` — PrivateRoute (proteção de rotas)
- `templates/` — PageLayout

Os tipos (interfaces) ficam em `src/types/`:

- `produto.ts` — `Produto` (formato da API), `ProdutoFormulario` (formato do formulário), `ErrosProduto`
- `usuario.ts` — `Credenciais`, `NovoUsuario`, `RespostaLogin`

## Rodando localmente

```bash
npm install
npm run dev
```

## Build e checagem de tipos

```bash
npm run build
```
