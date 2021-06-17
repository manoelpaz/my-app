import React from 'react';
import Menu from './Components/menu.jsx';
import Banner from './Components/banner.jsx';
import Features from './Components/features.jsx';
import Testemunho from './Components/testemunho.jsx';
import Precos from './Components/precos.jsx';
import Footer from './Components/footer.jsx';

function Site(){
    return <div>
        <Menu />
        <Banner />
        <Features />
        <Testemunho />
        <Precos />
        <Footer />
    </div>; 
  }

export default Site;