import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer mt-auto d-flex justify-content-center"
      style={{
        borderTop: '1px solid #ced4da',
      }}
    >
      <div
        className="container new-container d-flex align-items-center justify-content-start text-center"
        style={{ width: '1110px' }}
      >
        <img
          src="/Assets_Graficos/logotipo-LBC-transparente.png"
          alt="Logo"
          className="small-logo"
          style={{ marginRight: '32px' }}
        />
        <div className="d-flex align-items-center h-100 mt-3">
          <p style={{ fontSize: '14px' }}>
            Exercicio desenvolvido por Ricardo Barqueira
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
