import React, { useState, useEffect } from 'react';
import './Typewriter.css'

export function Typewriter() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);

  const fullText1 = 'Day and Boarding School';
  const fullText2 = 'SGIC... Forward by Grace';

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let timeout1;
    let timeout2;

    // Type first text
    const typeText1 = () => {
      if (index1 < fullText1.length) {
        setText1(fullText1.substring(0, index1 + 1));
        index1++;
        timeout1 = setTimeout(typeText1, 100);
      } else {
        setShowCursor1(false);
        setShowCursor2(true);
        // Start typing second text after a delay
        setTimeout(() => {
          typeText2();
        }, 500);
      }
    };

    // Type second text
    const typeText2 = () => {
      if (index2 < fullText2.length) {
        setText2(fullText2.substring(0, index2 + 1));
        index2++;
        timeout2 = setTimeout(typeText2, 120);
      }
    };

    // Start typing after initial delay
    const initialDelay = setTimeout(typeText1, 500);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <>
     
      <div className="typewriter-hero">
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>

        <div className="typewriter-container fade-in">
          <h1 className="typewriter-text-1">
            {text1}
            {showCursor1 && <span className="cursor"></span>}
          </h1>
          
          {text1 === fullText1 && <div className="decorative-line"></div>}
          
          <h2 className="typewriter-text-2">
            {text2}
            {showCursor2 && <span className="cursor"></span>}
          </h2>
        </div>
      </div>
    </>
  );
};


