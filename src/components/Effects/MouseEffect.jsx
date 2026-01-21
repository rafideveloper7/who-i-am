import React, { useState, useEffect, useRef } from 'react';

function AirplaneCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('moving-right');
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [smokeParticles, setSmokeParticles] = useState([]);
  const cursorRef = useRef(null);
  const smokeTrailRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const smokeIdRef = useRef(0);
  // const lastSmokeTimeRef = useRef(0);
  const animationFrameRef = useRef(null);
  const smokeIntervalRef = useRef(null);

  // Function to create multiple smoke particles
  const createSmokeParticles = (x, y, direction, count = 5) => {
    const newParticles = [];
    
    for (let i = 0; i < count; i++) {
      // Calculate base smoke position based on direction (from the tail)
      let baseX = 0, baseY = 0;
      switch(direction) {
        case 'moving-right':
          baseX = -30; baseY = 0;
          break;
        case 'moving-down-right':
          baseX = -21; baseY = -21;
          break;
        case 'moving-down':
          baseX = 0; baseY = -30;
          break;
        case 'moving-down-left':
          baseX = 21; baseY = -21;
          break;
        case 'moving-left':
          baseX = 30; baseY = 0;
          break;
        case 'moving-up-left':
          baseX = 21; baseY = 21;
          break;
        case 'moving-up':
          baseX = 0; baseY = 30;
          break;
        case 'moving-up-right':
          baseX = -21; baseY = 21;
          break;
        default:
          baseX = -30; baseY = 0;
      }
      
      // Add random offset to create trail effect
      const offsetMultiplier = i * 0.5; // Stagger particles
      const randomOffsetX = (Math.random() - 0.5) * 40;
      const randomOffsetY = (Math.random() - 0.5) * 40;
      
      newParticles.push({
        id: smokeIdRef.current++,
        x: x + baseX + (randomOffsetX * offsetMultiplier),
        y: y + baseY + (randomOffsetY * offsetMultiplier),
        size: Math.random() * 25 + 20, // Larger smoke particles
        offsetX: (Math.random() - 0.5) * 100, // More spread
        offsetY: (Math.random() - 0.5) * 100,
        scale: Math.random() * 2 + 1.5, // Larger scale
        duration: Math.random() * 1.5 + 2, // Longer duration
        opacity: 0.8 - (i * 0.15), // Fade out particles in trail
        delay: i * 100 // Stagger animation start
      });
    }
    
    return newParticles;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setPosition({ x: newX, y: newY });
      
      // Calculate direction based on movement
      if (lastPositionRef.current.x !== 0 && lastPositionRef.current.y !== 0) {
        const deltaX = newX - lastPositionRef.current.x;
        const deltaY = newY - lastPositionRef.current.y;
        
        // Only update direction if movement is significant
        if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
          let newDirection = '';
          
          // Calculate angle in degrees
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          
          // Map angle to direction with 8 directions
          if (angle >= -22.5 && angle < 22.5) newDirection = 'moving-right';
          else if (angle >= 22.5 && angle < 67.5) newDirection = 'moving-down-right';
          else if (angle >= 67.5 && angle < 112.5) newDirection = 'moving-down';
          else if (angle >= 112.5 && angle < 157.5) newDirection = 'moving-down-left';
          else if (angle >= 157.5 || angle < -157.5) newDirection = 'moving-left';
          else if (angle >= -157.5 && angle < -112.5) newDirection = 'moving-up-left';
          else if (angle >= -112.5 && angle < -67.5) newDirection = 'moving-up';
          else if (angle >= -67.5 && angle < -22.5) newDirection = 'moving-up-right';
          
          setDirection(newDirection);
          
          // Update CSS variable for current rotation
          if (cursorRef.current) {
            // Convert direction to degrees for CSS variable
            let rotateDeg = 0;
            switch(newDirection) {
              case 'moving-right': rotateDeg = 0; break;
              case 'moving-down-right': rotateDeg = 45; break;
              case 'moving-down': rotateDeg = 90; break;
              case 'moving-down-left': rotateDeg = 135; break;
              case 'moving-left': rotateDeg = 180; break;
              case 'moving-up-left': rotateDeg = -135; break;
              case 'moving-up': rotateDeg = -90; break;
              case 'moving-up-right': rotateDeg = -45; break;
              default: rotateDeg = 0;
            }
            cursorRef.current.style.setProperty('--current-rotate', `${rotateDeg}deg`);
          }
        }
      }
      
      lastPositionRef.current = { x: newX, y: newY };
      
      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a, button, [role="button"], [onclick]')
      );
      
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 300);
    };

    const handleMouseEnter = (e) => {
      if (e.target && e.target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target && e.target.closest('a, button, [role="button"]')) {
        setIsHovering(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Hide default cursor on entire document
    document.documentElement.style.cursor = 'none';
    
    // Start continuous smoke generation
    smokeIntervalRef.current = setInterval(() => {
      // Create multiple smoke particles when moving
      if (lastPositionRef.current.x !== 0 && lastPositionRef.current.y !== 0) {
        const newSmokes = createSmokeParticles(
          lastPositionRef.current.x,
          lastPositionRef.current.y,
          direction,
          3 // Create 3 particles each interval
        );
        
        setSmokeParticles(prev => [...prev, ...newSmokes].slice(-50)); // Keep last 50 particles
      }
    }, 50); // Generate smoke every 50ms

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (smokeIntervalRef.current) {
        clearInterval(smokeIntervalRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.documentElement.style.cursor = 'auto';
    };
  }, [direction]);

  // Remove smoke particles after animation
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      if (smokeParticles.length > 0) {
        // Remove particles older than 3 seconds
        const now = Date.now();
        setSmokeParticles(prev => prev.filter(p => now - p.id < 3000));
      }
    }, 100);

    return () => clearInterval(cleanupInterval);
  }, [smokeParticles]);

  return (
    <>
      {/* Smoke trail - fixed positioning */}
      <div ref={smokeTrailRef} className="smoke-trail">
        {smokeParticles.map((smoke) => (
          <div
            key={smoke.id}
            className="smoke-particle"
            style={{
              left: `${smoke.x}px`,
              top: `${smoke.y}px`,
              width: `${smoke.size}px`,
              height: `${smoke.size}px`,
              '--smoke-x': `${smoke.offsetX}px`,
              '--smoke-y': `${smoke.offsetY}px`,
              '--smoke-scale': smoke.scale,
              animationDuration: `${smoke.duration}s`,
              opacity: smoke.opacity,
              animationDelay: `${smoke.delay}ms`
            }}
          />
        ))}
      </div>
      
      {/* Airplane cursor - fixed positioning */}
      <div 
        ref={cursorRef}
        className={`airplane-cursor ${direction} ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        ✈️
      </div>
    </>
  );
}

export default AirplaneCursor;