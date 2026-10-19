import { useState } from 'react';
import type { ChangeEvent } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import type { RespostaLogin } from '../../../types/usuario';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const realizarLogin = () => {
    axios.post<RespostaLogin>('https://projeto-node-step-t5i1.vercel.app/login', {
      email: email,
      senha: senha,
    })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch(() => {
        setErro('Email ou senha incorretos.');
      });
  };

  return (
    <form className="form">
      <h1>Login</h1>
      <FormField rotulo="E-mail" tipo="email" valor={email} aoMudar={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      <FormField rotulo="Senha" tipo="password" valor={senha} aoMudar={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)} />
      <Button onClick={realizarLogin}>Entrar</Button>
      {erro && <p className="erro">{erro}</p>}
      <Link to="/registrar">Não tem conta? Cadastre-se</Link>
    </form>
  );
};

export default LoginForm;
