import React from 'react';

const Navbar = ({ children, className = '', borderColor = 'navbar-background', bgColor = 'bg-gray-100' }) => {
  const clipPath = 'polygon(75% 0, 100% 34%, 54% 100%, 0 100%, 0 0)';

  return (
    <div className={`relative w-64 h-64 ${className}`}>
      <div 
        className={`absolute inset-0 ${borderColor}`}
        style={{
          clipPath,
          transform: 'scale(1.02)',
        }}
      />
      <div 
        className={`absolute inset-0 ${bgColor}`}
        style={{ clipPath }}
      >
        {children}
      </div>
    </div>
  );
}

export default Navbar