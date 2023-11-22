import React, { ReactNode, MouseEvent } from 'react';

interface BlueButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const BlueButton: React.FC<BlueButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default BlueButton;
