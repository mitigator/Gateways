import React, { useEffect, useState } from 'react';
import '../css/loader.css'; // Import glitch styles

const Loader = () => {
  const [size, setSize] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const expand = setTimeout(() => {
      setSize(600); // Expand to 600px
    }, 100);

    const glitchTimeout = setTimeout(() => {
      setIsGlitching(true); // Start glitch effect
    }, 1000); // Glitch after the expansion

    return () => {
      clearTimeout(expand);
      clearTimeout(glitchTimeout);
    };
  }, []);

  return (
    <div className={`loader-container ${isGlitching ? 'glitch' : ''}`}>
      <h1
        className="loader-text"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <span data-text="Cybernyx">Cybernyx</span>
      </h1>
    </div>
  );
};

export default Loader;
