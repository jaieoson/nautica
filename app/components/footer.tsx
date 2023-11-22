import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <h3 className="text-lg font-semibold mb-2">Informações de Contato</h3>
          <p>Email: contato@passeiosnauticos.com</p>
          <p>Telefone: (12) 3456-7890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <h3 className="text-lg font-semibold mb-2">CNPJ</h3>
          <p>12.345.678/0001-90</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <h3 className="text-lg font-semibold mb-2">Mapa do Site</h3>
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/tours">Passeios</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;