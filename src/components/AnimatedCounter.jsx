import React, { useState, useEffect, useRef } from "react";
import "./Counter.css"; // Import the CSS file for styling and animation

const AnimatedCounter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const end = 15;
            const duration = 2000; // Duration of animation in milliseconds
            const stepTime = 50; // Time between steps in milliseconds
            const steps = duration / stepTime;

            const step = () => {
              if (start < end) {
                start += end / steps;
                setCount(Math.round(start));
                setTimeout(step, stepTime);
              } else {
                setCount(end);
              }
            };

            step();
            // Stop observing after animation starts
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold as needed

    observer.observe(element);

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className='counter-container'>
      <div ref={counterRef} className='counter'>
        {count}+
      </div>
    </div>
  );
};

export default AnimatedCounter;
