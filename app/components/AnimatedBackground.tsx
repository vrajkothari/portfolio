import { useEffect, useRef } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const elementsRef = useRef<FloatingElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize floating elements
    const initElements = () => {
      elementsRef.current = [];
      for (let i = 0; i < 50; i++) {
        elementsRef.current.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 0.5 + 0.1,
          direction: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    initElements();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elementsRef.current.forEach((element) => {
        // Update position
        element.x += Math.cos(element.direction) * element.speed;
        element.y += Math.sin(element.direction) * element.speed;

        // Wrap around screen
        if (element.x < 0) element.x = canvas.width;
        if (element.x > canvas.width) element.x = 0;
        if (element.y < 0) element.y = canvas.height;
        if (element.y > canvas.height) element.y = 0;

        // Draw element
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${element.opacity})`; // emerald-500
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = 'rgba(34, 197, 94, 0.5)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${element.opacity * 0.3})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
