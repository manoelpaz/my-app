import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './novaconta.css';

import firebase from '../Config/firebase';
import 'firebase/auth';

function Novaconta(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');

  function cadastrarUsuario() {
    setMensagem('');

    if (!email || !senha) {
      setMensagem('Informe todos os campos');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
      //alert('Usuário criado com sucesso.');
      setSucesso('S');
    }).catch(error => {
      setSucesso('N');
      setMensagem(error.message);
    })
  }

  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <img className="mb-4" src="/Images/logo-small2.png" alt="" />
      <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

      <div className="form-floating">
        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
        <label htmlFor="floatingInput">E-mail</label>
      </div>

      <div className="form-floating">
        <input onChange={e => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
        <label htmlFor="floatingPassword">Senha</label>
      </div>

      <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar conta</button>
      
      {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

      {sucesso === 'S' ? <Redirect to='/app/home' /> : null}

      <div className="login-links mt-5">
        <Link to="/app" className="mx-3">Já tenho uma conta</Link>
      </div>
      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Inveni&#174; Sistema de Internet Ltda.</p>
    </form>
  </div>; 
}

export default Novaconta;