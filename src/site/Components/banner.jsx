import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Uma plataforma de CRM fácil de configurar e simpls de usar</h1> 
                    <h4>Gerencie seus clintes em um único lugar</h4> 
                    <a href="#" className="btn btn-dark btn-lg btn-banner">Criar uma conta</a>
                    <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
                </div>
                <div className="col-lg-6">
                    <img src="Images/screenshot-crm.png" alt="" />
                </div> 
            </div>
        </div>
    </section>;
  }

export default Banner;