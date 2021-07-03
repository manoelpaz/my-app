import React, { useState, useEffect } from 'react';
import './listacliente.css';
//import clientes from '../../Dados/clientes';

import firebase from '../../Config/firebase';

function ListaClientes() {

    const [clientes, setClientes] = useState([]);
    var listaClientes = [];

    useEffect(function() {
        firebase.firestore().collection('clientes').get().then(async function(resultado) {
            await resultado.docs.forEach(function(doc) {
                listaClientes.push({
                        id: doc.id, 
                        nome: doc.data().nome,
                        email: doc.data().email,
                        fone: doc.data().fone
                    });
            })

            setClientes(listaClientes);
        })
    }, []);

    return <table className="table table-hover table-bordered">
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>
                <tbody>

                {
                    clientes.map((cliente) => {
                        return <tr key={cliente.id}>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.fone}</td>
                    </tr>
                    })
                }          
                
                </tbody>
            </table>
}

export default ListaClientes;