import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import './home.css';
import ListaClientes from '../Components/ListaCliente/listacliente';

function Home(){
  return <div>
      <Navbar />
      <div className="container-fluid titulo">
        <h1>Cadastro de Clientes</h1>
        <ListaClientes />
      </div>
  </div>; 
}

export default Home;