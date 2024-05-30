// import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// const C_Button: React.FC<ButtonProps> = ({ onClick, children }) => (
//   <button onClick={onClick}>{children}</button>
// );

// export default C_Button; 

export function C_Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick}>{children}</button>
)
}

export default C_Button