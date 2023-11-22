/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import Footer from './components/footer';
import PasseiosNauticos from './components/passeio';
import BlueButton from './components/botao';

const toursData = [
  {
    id: 1,
    title: 'Passeio lagoas Mundaú',
    description: 'Navegue pelas águas serenas da Lagoa Mundaú, uma experiência única em Alagoas. 🚤✨.',
    imageUrl: '/barco1.png',
  },
  {
    id: 2,
    title: 'Passeio Lagoa Prainha',
    description: 'Da serenidade da Lagoa Mundaú à beleza intocada da Prainha: seu passeio dos sonhos. 🏞️🚤',
    imageUrl: '/barco1.png',
  },
  {
    id: 3,
    title: 'Passeio Lagoa Francês',
    description: 'Explore a exuberância da Lagoa Mundaú à agitação da Praia do Francês. Uma jornada inesquecível. 🏝️🚤',
    imageUrl: '/barco1.png',
  },
];


function handleAgendamento() {

  alert("Agendamento sera implementado em breve")

}


const ToursList = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center">
      {toursData.map((tour) => (
        <div
          key={tour.id}
          className="w-full md:w-1/2 lg:w-1/3 p-4"
        >
          <div className="bg-white rounded-md overflow-hidden shadow-lg">
            <img
              src={tour.imageUrl}
              alt={tour.title}
              className="w-full h-62 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{tour.title}</h2>
              <p className="text-gray-600">{tour.description}</p>
              <BlueButton onClick={handleAgendamento}>Agendar</BlueButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
  
  
    <><nav className="bg-blue-500 p-4">


      <div className="container mx-auto flex justify-between items-center">

        <Image src={'/bombordo.png'}
          width={100}
          height={100}
          priority
          alt={'Navegar é ´preciso'}
          style={{ width: "100px", height: "100px", objectFit: "cover" }} />

       

        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <div
          className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-lg lg:flex-grow">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Tours
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
            >
              Contact
            </a>
          </div>
        </div>



      </div>
    </nav>
      <PasseiosNauticos/>
      <ToursList />
    <Footer/>
    </>
    
    
  )
}
