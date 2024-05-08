import React from "react";
import "./barraLateral.css"; 
import 'normalize.css';

function BarraLateral() {
  return (
    <div className="barra-lateral">
      <div className="logo">
        <img src="../public/icons/infinity.png" alt="Logo" />
      </div>
      <div className="icones">
        <div className="icone" id="iconeUser">
          <img src="../public/icons/document.png" alt="Ícone 1" />
        </div>
        <div className="icone">
          <img src="../public/icons/user.png" alt="Ícone 2" />
        </div>
        <div className="icone">
          <img src="../public/icons/settings.png" alt="Ícone 3" />
        </div>
      </div>
    </div>
  );
}

export default BarraLateral;
