import React from 'react';

function Footer(){
  var ano = new Date().getFullYear();
  //var rc = '\u0169';

    return <section id="footer">    
      <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://facebook.com/InveniSys"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/SysInveni"><i className="fa fa-twitter fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="https://instagram.com/invenisys"><i className="fa fa-instagram fa-2x"></i></a></li>		
                <li className="list-inline-item"><a href="mailto:manoel.paz@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope fa-2x"></i></a></li>
            </ul>
	    </div>
      <a href="mailto:manoel.paz@gmail.com">comercial@inveni.com.br</a>
      <p>Desenvolvido por Inveni&#174; Sistema de Internet Ltda. - &#169; {ano}</p>

    </section>;
  }

export default Footer;