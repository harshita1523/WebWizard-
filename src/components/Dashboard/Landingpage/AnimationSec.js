import React, { useState, useEffect } from 'react';
import './AnimationSec.css'; // Import the CSS file

// Import your image (adjust the path as needed)

function AnimationSec() {
    const [text, setText] = useState('');
    const sentence = "Unlock your coding potential with our interactive courses!❤️";
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typeEffect = () => {
            const currentChar = sentence.substring(0, charIndex + 1);

            setText(currentChar);

            if (currentChar === sentence) {
                // Animation is complete
                setTimeout(() => {
                    setCharIndex(0); // Reset the charIndex to restart the animation
                }, 1000); // Delay before restarting
            } else {
                setTimeout(() => {
                    setCharIndex((prevCharIndex) => prevCharIndex + 1);
                }, 50); // Typing speed
            }
        };

        typeEffect();
    }, [charIndex]);

    const iframeStyle = {
        border: '1px solid rgba(0, 0, 0, 0.1)',
      };
  
    return (
        
        <section id="hero">
            {/* Background image or video */}
            <div className="hero-bg">
                {/* You can use a background image or video here */}
            </div>

            <div className="container">
                {/* Heading */}
                <h1>Start Your Coding Journey Now...</h1>
                {/* Subheading */}
                <p className="typing">{text}</p>

                {/* Search bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search for courses..." />
                    <button>Search</button>
                </div>

                {/* Additional content or animation */}
                {/* You can add any additional content or animations here to make it more attractive */}

                {/* Image with animation */}
                <div className="image-container">
                    <img
                        src="/bkl.png"
                        alt="Coding Image"
                        className="floating-image transparent-bg" // Apply the animation class and transparent background class
                    />
                     {/* <iframe
                        style={iframeStyle}
                        width="800"
                        height="450"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fj48JuWzYDAEmRstkmPZytP%2Fbkl%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DJkck4BDoI2Z3yHie-1"
                        allowFullScreen
    
                    ></iframe> */}


                </div>
            </div>
        </section>
    );
}

export default AnimationSec;
