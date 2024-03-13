import React, { useState, useEffect } from 'react';
import './CursorAnimation.css';

function CursorAnimation() {
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    let timeout;

    // Follow cursor on mousemove
    document.addEventListener('mousemove', (e) => {
      let x = e.pageX;
      let y = e.pageY;

      // document.querySelector('.cursor').style.top = y + 'px';
      // document.querySelector('.cursor').style.left = x + 'px';
      // document.querySelector('.cursor').style.display = 'block';

      // Cursor effects when mouse stopped
      function mouseStopped() {
        // document.querySelector('.cursor').style.display = 'none';
      }

      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    // Cursor effects when mouseout
    document.addEventListener('mouseout', () => {
      // document.querySelector('.cursor').style.display = 'none';
    });

    return () => {
      // Clean up event listeners on component unmount
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mouseout', () => {});
    };
  }, []);

  return (
    <div className={`cursor ${cursorVisible ? 'visible' : ''}`}></div>
  );
}

export default CursorAnimation;
