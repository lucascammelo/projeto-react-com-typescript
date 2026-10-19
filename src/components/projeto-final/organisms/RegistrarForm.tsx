import { useState } from 'react';
import type { ChangeEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import Select from '../atoms/Select';
import './RegistrarForm.css';

const RegistrarForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [funcao, setFuncao] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const cadastrarUsuario = () => {
    axios.post('https://projeto-node-step-t5i1.vercel.app/registrar', {
      nome,
      email,
      senha,
      role: funcao,
    })
      .then(() => {
        setMensagem('Usuário cadastrado com sucesso!');
        setErro('');
        setNome('');
        setEmail('');
        setSenha('');
        setFuncao('');
      })
      .catch(() => {
        setMensagem('');
        setErro('Erro ao cadastrar usuário. Confira os dados e tente novamente.');
      });
  };

  return (
    <form className="form">
      <h1>Registrar</h1>

      <FormField rotulo="Nome" tipo="text" valor={nome} aoMudar={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
      <FormField rotulo="E-mail" tipo="email" valor={email} aoMudar={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      <FormField rotulo="Senha" tipo="password" valor={senha} aoMudar={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)} />

      <div>
        <Label>Função</Label>
        <Select valor={funcao} aoMudar={(e: ChangeEvent<HTMLSelectElement>) => setFuncao(e.target.value)}>
          <option value="">selecione</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuário</option>
        </Select>
      </div>

      <Button onClick={cadastrarUsuario}>Cadastrar</Button>
      {mensagem && <p className="sucesso">{mensagem}</p>}
      {erro && <p className="erro">{erro}</p>}
      <Link to="/Login">Já tem conta? Entrar</Link>
    </form>
  );
};

export default RegistrarForm;
